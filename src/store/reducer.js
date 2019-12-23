import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from "../components/header/store";
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as articleReducer} from '../pages/article/store';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    article: articleReducer
});

export default reducer
