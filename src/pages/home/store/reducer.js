import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    bannerList: [],
    banner: '',
    innerHeight: window.innerHeight,
    featureList: [],
    blogList: [],
    articlePage: 1,
    thumbList: [],
    finished: false,
    loading:true
});

const setBanner = (state, action) => {
    const banner = action.data.toJS();
    const num = getrand(0, banner.length - 1);
    return state.merge({
        bannerList: action.data,
        banner: banner.length ? `url('${banner[num].img}')` : ''
    })
};

const getrand = (m, n) => {
    return Math.floor(Math.random() * (n - m + 1)) + m;
};

const changeBanner = (state) => {
    const banner = state.get('bannerList').toJS();
    const num = getrand(0, banner.length - 1);
    return state.merge({
        banner: banner.length ? `url('${banner[num].img}')` : ''
    })
};

const changeInnerHeight = (state) => {
    return state.set('innerHeight', window.innerHeight);
};

const setFeature = (state, action) => {
    return state.merge({
        featureList: action.data
    })
};

const thumbImg = (thumbList, data) => {
    const list = data.toJS();
    const Img = thumbList.toJS();
    let arr = [];
    for (let i = 0; i < list.length; i++) {
        arr.push({
            id: list[i].id,
            title: list[i].title,
            thumbnail: list[i].thumbnail || Img[getrand(0, Img.length - 1)].img,
            comments: list[i].comments,
            status: list[i].status,
            summary: list[i].summary,
            views: list[i].views,
            createTime: list[i].createTime,
            syncStatus: list[i].syncStatus,
            author: list[i].author,
        })
    }
    return arr
};

const setBlogList = (state, action) => {
    const arr = thumbImg(state.get('thumbList'), action.data);
    return action.override ? state.merge({
        blogList: action.override ? fromJS(arr) : state.get('blogList').concat(fromJS(arr)),
        articlePage: action.nextPage,
        finished: false,
        loading:false
    }) : state.merge({
        blogList: action.override ? fromJS(arr) : state.get('blogList').concat(fromJS(arr)),
        articlePage: action.nextPage,
        loading:false
    })
};

const setRandomThumb = (state, action) => {
    return state.merge({
        thumbList: action.data
    })
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_BANNER:
            return setBanner(state, action);
        case constants.CHANGE_BANNER:
            return changeBanner(state);
        case constants.CHANGE_INNERHEIGHT:
            return changeInnerHeight(state, action);
        case constants.GET_FEATURE:
            return setFeature(state, action);
        case constants.GET_BLOGLIST:
            return setBlogList(state, action);
        case constants.RANDOW_THUMB:
            return setRandomThumb(state, action);
        case constants.SET_FINISHED:
            return state.set('finished', true);
        case constants.LOADING_TRUE:
            return state.set('loading', true);
        default:
            return state;
    }
}
