import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const setBanner = (data) => ({
    type: constants.GET_BANNER,
    data: fromJS(data),
});

export const getBanner = () => {
    return (dispatch) => {
        const bannerList = [
            {img: 'http://image.bygit.cn/banner-1.png'},
            {img: 'http://image.bygit.cn/banner-2.png'},
            {img: 'http://image.bygit.cn/banner-3.png'},
            {img: 'http://image.bygit.cn/banner-4.png'},
            {img: 'http://image.bygit.cn/banner-5.png'}
        ];
        dispatch(setBanner(bannerList));
    }
};

export const changehBanner = () => ({
    type: constants.CHANGE_BANNER,
});

export const changeInnerHeight = () => ({
    type: constants.CHANGE_INNERHEIGHT,
});

const setFeature = (data) => ({
    type: constants.GET_FEATURE,
    data: fromJS(data),
});

export const getFeature = () => {
    return (dispatch) => {
        axios.get('/posts/weight/v1/list', {
            params: {
                page: 1,
                size: 3
            }
        }).then(function (res) {
            if (res.success === 1) {
                dispatch(setFeature(res.models));
            }
        });
    }
};

const setBlogList = (data, nextPage, override) => ({
    type: constants.GET_BLOGLIST,
    data: fromJS(data),
    nextPage,
    override
});

const setfinished = () => ({
    type: constants.SET_FINISHED,
});

export const getBlogList = (page, override) => {
    return (dispatch) => {
        dispatch({type: constants.LOADING_TRUE});
        axios.get('/posts/posts/v1/list', {
            params: {
                page: page,
                size: 10
            }
        }).then(function (res) {
            if (res.success === 1) {
                let current = res.pageInfo.page * res.pageInfo.size;
                let total = res.pageInfo.total;
                dispatch(setBlogList(res.models, page + 1, override));
                if (current > total) dispatch(setfinished());
            }
        });
    }
};

