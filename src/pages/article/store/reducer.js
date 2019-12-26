import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    content: '',
    timg:[
        {img:'http://image.bygit.cn/timg-1.png'},
        {img:'http://image.bygit.cn/timg-2.png'},
        {img:'http://image.bygit.cn/timg-3.png'},
        {img:'http://image.bygit.cn/timg-4.png'}
    ]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_DETAIL:
            return state.set('content', action.content);
        case constants.DEL_DETAIL:
            return state.set('content', '');
        default:
            return state;
    }
}
