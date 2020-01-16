import {fromJS} from 'immutable';
import * as constants from './constants';
import {getrand} from '../../../lib/public'

const defaultState = fromJS({
    featureList: [],
    blogList: [],
    articlePage: 1,
    thumbList: [
        {img: 'http://image.bygit.cn/list_01.png'},
        {img: 'http://image.bygit.cn/list_02.png'},
        {img: 'http://image.bygit.cn/list_03.png'},
        {img: 'http://image.bygit.cn/list_04.png'},
        {img: 'http://image.bygit.cn/list_05.png'},
        {img: 'http://image.bygit.cn/list_06.png'},
        {img: 'http://image.bygit.cn/list_07.png'},
        {img: 'http://image.bygit.cn/list_08.png'},
        {img: 'http://image.bygit.cn/list_09.png'},
        {img: 'http://image.bygit.cn/list_10.png'},
        {img: 'http://image.bygit.cn/list_11.png'},
        {img: 'http://image.bygit.cn/list_12.png'},
        {img: 'http://image.bygit.cn/list_13.png'},
        {img: 'http://image.bygit.cn/list_14.png'}
    ],
    finished: false,
    loading: true,
    isList: false
});

const setFeature = (state, action) => {
    return state.merge({
        featureList: action.data
    })
};

const list = (thumbList, data) => {
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
            categoryName: list[i].categoryName
        })
    }
    return arr
};

const setBlogList = (state, action) => {
    const arr = list(state.get('thumbList'), action.data);
    return action.override ? state.merge({
        blogList: action.override ? fromJS(arr) : state.get('blogList').concat(fromJS(arr)),
        articlePage: action.nextPage,
        finished: false,
        loading: false,
        isList: true
    }) : state.merge({
        blogList: action.override ? fromJS(arr) : state.get('blogList').concat(fromJS(arr)),
        articlePage: action.nextPage,
        loading: false,
        isList: true
    })
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_FEATURE:
            return setFeature(state, action);
        case constants.GET_BLOGLIST:
            return setBlogList(state, action);
        case constants.SET_FINISHED:
            return state.set('finished', true);
        case constants.LOADING_TRUE:
            return state.set('loading', true);
        default:
            return state;
    }
}
