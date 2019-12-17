import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    bannerList: [],
    banner: '',
    innerHeight:window.innerHeight
});

const setBanner = (state, action) => {
    const banner = action.data.toJS();
    const num = getrand(0, banner.length - 1);
    return state.merge({
        bannerList: action.data,
        banner: banner.length ? 'url(' + banner[num].img + ')' : ''
    })
};

const getrand = (m, n) => {
    return Math.floor(Math.random() * (n - m + 1)) + m;
};

const changeBanner = (state) => {
    const banner = state.get('bannerList').toJS();
    const num = getrand(0, banner.length - 1);
    return state.merge({
        banner: banner.length ? 'url(' + banner[num].img + ')' : ''
    })
};

const changeInnerHeight = (state) =>{
    return state.set('innerHeight',window.innerHeight);
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_BANNER:
            return setBanner(state, action);
        case constants.CHANGE_BANNER:
            return changeBanner(state);
        case constants.CHANGE_INNERHEIGHT:
            return changeInnerHeight(state, action);
        default:
            return state;
    }
}
