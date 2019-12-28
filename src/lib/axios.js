import axios from 'axios';
import {getToken} from './auth';

axios.defaults.baseURL = '/api/blog';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    if (getToken()) {
        config.headers["Authorization"] = getToken();
    }
    return config
}, function (error) {
    return Promise.reject(error)
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error)
});
