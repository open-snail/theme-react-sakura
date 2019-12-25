import axios from 'axios';
import * as constants from './constants';

const setDetail = (content) => ({
	type: constants.GET_DETAIL,
	content
});

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/posts/posts/v1/' + id).then((res) => {
			if(res.success === 1){
				dispatch(setDetail(res.model));
			}
		});
	}
};

export const delDetail = () =>({
	type: constants.DEL_DETAIL,
});
