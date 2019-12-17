// import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const setBanner = (data) => ({
    type: constants.GET_BANNER,
    data: fromJS(data),
});

export const getBanner = () => {
    return (dispatch) => {
        // axios.get('/category/category/v1/list').then((res) => {
        //     if(res.success===1){
        //         dispatch(setBanner(res.models));
        //     }
        // })
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

export const changeInnerHeight = () =>({
    type: constants.CHANGE_INNERHEIGHT,
});
