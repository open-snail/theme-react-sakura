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

export function scrollAnimation(currentY, targetY) {
    // 计算需要移动的距离
    let needScrollTop = targetY - currentY;
    let _currentY = currentY;
    setTimeout(() => {
        // 一次调用滑动帧数，每次调用会不一样
        const dist = Math.ceil(needScrollTop / 10);
        _currentY += dist;
        window.scrollTo(_currentY, currentY);
        // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
        if (needScrollTop > 10 || needScrollTop < -10) {
            scrollAnimation(_currentY, targetY)
        } else {
            window.scrollTo(_currentY, targetY)
        }
    }, 1)
}
