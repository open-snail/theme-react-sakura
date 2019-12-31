import Cookies from "js-cookie";
import axios from "axios";
import {message} from "antd";

const TokenKey = "hello-blog-token";
const Avatar = "Avatar";

export function getAvatar() {
    return Cookies.get(Avatar);
}

export function setAvatar(url) {
    return Cookies.set(Avatar, url);
}

export function getToken() {
    return Cookies.get(TokenKey);
}

export function setToken(token) {
    return Cookies.set(TokenKey, token);
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}

export function loginGithubHandel(e) {
    const {socialId, avatar, name, htmlUrl} = e.data;
    if (socialId) {
        axios({
            method: 'post',
            url: '/auth/user/v1/login',
            data: {
                socialId: socialId,
                avatar: avatar,
                name: name,
                htmlUrl: htmlUrl
            }
        }).then((res) => {
            if (res.success === 1) {
                setToken(res.model.token);
                setAvatar(res.model.avatar);
                message.success('登录成功');
            }
        });
        window.removeEventListener("message", loginGithubHandel, false);
    }
}
