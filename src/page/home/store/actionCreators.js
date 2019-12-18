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
            {img: require('../../../statics/images/BG-001.jpg')},
            {img: require('../../../statics/images/BG-002.jpg')}
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

const setFeature = (data) =>({
    type: constants.GET_FEATURE,
    data: fromJS(data),
});

export const getFeature = () => {
    return (dispatch) => {
        const featureList = [
            {img:require('../../../statics/images/th_1.png'),title:'Sakura',info:'本站 WordPress 主题'},
            {img:require('../../../statics/images/th_2.jpg'),title:'Pixiv',info:'P 站的正确打开方式'},
            {img:require('../../../statics/images/th_3.jpg'),title:'明日方舟',info:'游戏主界面 H5 复刻'},
        ];
        dispatch(setFeature(featureList));
    }
};

const setBlogList = (data) =>({
    type: constants.GET_BLOGLIST,
    data: fromJS(data),
});

export const getBlogList = () => {
    return (dispatch) => {
        axios.get('/posts/posts/v1/list').then((res) => {
            if(res.success===1){
                dispatch(setBlogList(res.models));
            }
        })
    }
};

const setRandomThumb = (data) =>({
    type: constants.RANDOW_THUMB,
    data: fromJS(data),
});

export const randomThumb = ()=>{
    return (dispatch) => {
        const thumbList = [
            {img:require('../../../statics/images/list_01.jpg')},
            {img:require('../../../statics/images/list_02.jpg')},
            {img:require('../../../statics/images/list_03.png')},
            {img:require('../../../statics/images/list_04.png')},
            {img:require('../../../statics/images/list_05.png')},
            {img:require('../../../statics/images/list_06.png')},
            {img:require('../../../statics/images/list_07.png')},
            {img:require('../../../statics/images/list_08.jpg')},
            {img:require('../../../statics/images/list_09.jpg')},
            {img:require('../../../statics/images/list_10.jpg')},
        ];
        dispatch(setRandomThumb(thumbList));
    }
};
