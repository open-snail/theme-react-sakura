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
