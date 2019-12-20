import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	content: ''
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_DETAIL:
			return state.merge({
				content: action.content
			});
		default:
			return state;
	}
}
