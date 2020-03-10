import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    featureList: [],
    blogList: [],
    articlePage: 1,
    finished: false,
    loading: true,
    isList: false
});

const setFeature = (state, action) => {
    return state.merge({
        featureList: action.data
    })
};

const setBlogList = (state, action) => {
    return action.override ? state.merge({
        blogList: action.override ? fromJS(action.data) : state.get('blogList').concat(fromJS(action.data)),
        articlePage: action.nextPage,
        finished: false,
        loading: false,
        isList: true
    }) : state.merge({
        blogList: action.override ? fromJS(action.data) : state.get('blogList').concat(fromJS(action.data)),
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
