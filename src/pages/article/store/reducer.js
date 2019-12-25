import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    content: ''
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
