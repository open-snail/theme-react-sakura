import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

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

