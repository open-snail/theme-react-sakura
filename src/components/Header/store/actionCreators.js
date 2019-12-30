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
            if (res.success === 1) {
                dispatch(changeCategory(res.models));
            }
        })
    }
};

export const getUser = () => {
    return (dispatch) => {
        axios.get('/auth/master/v1/get').then((res) => {
            if (res.success === 1) {
                dispatch({
                    type: constants.GET_USER,
                    data: fromJS(res.model)
                });
            }
        })
    }
};

export const getConfing = () => {
    return (dispatch) => {
        axios.get('/config/config-base/v1/list').then((res) => {
            if (res.success === 1) {
                const {models} = res;
                let data = {};
                models.forEach(item => {
                    if (item.configKey === "name") {
                        data.title = item.configValue;
                    }
                    if (item.configKey === "keywords") {
                        data.keywords = item.configValue;
                        let oMeta = document.createElement('meta');
                        oMeta.name = 'keywords';
                        oMeta.content = item.configValue;
                        document.getElementsByTagName('head')[0].appendChild(oMeta);
                    }
                    if (item.configKey === "description") {
                        data.description = item.configValue;
                        let Meta = document.createElement('meta');
                        Meta.name = 'description';
                        Meta.content = item.configValue;
                        document.getElementsByTagName('head')[0].appendChild(Meta);
                    }
                    if (item.configKey === "domain") {
                        data.domain = item.configValue;
                    }
                    if (item.configKey === "copyright") {
                        data.copyright = item.configValue;
                    }
                    if (item.configKey === "metas") {
                        data.metas = item.configValue;
                    }
                    if (item.configKey === "icp") {
                        data.icp = item.configValue;
                    }
                });
                dispatch({
                    type: constants.GET_CONFING,
                    data: fromJS(data)
                });
            }
        })
    }
};
