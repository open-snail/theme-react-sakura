import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

const changeCategory = (data) => ({
    type: constants.GET_CATEGORY,
    data: fromJS(data),
});


export const getCategory = () => {
    return (dispatch) => {
        axios.get('/category/category/v1/list').then((res) => {
            if(res.success===1){
                dispatch(changeCategory(res.models));
            }
        })
    }
};
