import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from "../components/Header/store";
import {reducer as homeReducer} from '../pages/home/store';

const image = ()=>{
    return{
        topImg:[
            {img: 'https://image.bygit.cn/timg-1.png'},
            {img: 'https://image.bygit.cn/timg-2.png'},
            {img: 'https://image.bygit.cn/timg-3.png'},
            {img: 'https://image.bygit.cn/timg-4.png'}
        ],
        ListImg: [
            {img: 'https://image.bygit.cn/list_01.png'},
            {img: 'https://image.bygit.cn/list_02.png'},
            {img: 'https://image.bygit.cn/list_03.png'},
            {img: 'https://image.bygit.cn/list_04.png'},
            {img: 'https://image.bygit.cn/list_05.png'},
            {img: 'https://image.bygit.cn/list_06.png'},
            {img: 'https://image.bygit.cn/list_07.png'},
            {img: 'https://image.bygit.cn/list_08.png'},
            {img: 'https://image.bygit.cn/list_09.png'},
            {img: 'https://image.bygit.cn/list_10.png'},
            {img: 'https://image.bygit.cn/list_11.png'},
            {img: 'https://image.bygit.cn/list_12.png'},
            {img: 'https://image.bygit.cn/list_13.png'},
            {img: 'https://image.bygit.cn/list_14.png'}
        ],
    }
};

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    image: image
});

export default reducer
