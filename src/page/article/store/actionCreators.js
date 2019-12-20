import axios from 'axios';
import * as constants from './constants';

const changeDetail = (content) => ({
	type: constants.CHANGE_DETAIL,
	content
});

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/posts/posts/v1/' + id).then((res) => {
			if(res.success === 1){
				dispatch(changeDetail(res.model));
			}
		});
	}
};
