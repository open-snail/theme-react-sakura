import styled from "styled-components";

export const SiteMain = styled.div`
    .post-list {
        margin: 0 0 8%;
        position: relative;
    }
    .post-list-show {
        animation: post-list-show .5s;
        -webkit-animation: post-list-show .5s;
        opacity: 1;
    }
    @keyframes post-list-show {
        0% {
            opacity: 0;
            -webkit-transform: translateY(80px);
            transform: translateY(80px)
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }
    }
    .feature {
        position: absolute;
        margin-top: 10px;
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            padding: 2px;
            border: 1px solid #dadada;
            position: relative;
        }
    }
    .entry-title {
        font-size: 20px;
        font-weight: 400;
        line-height: 50px;
        margin: 0 0 0 17%;
        position: relative;
        z-index: 1;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 70%;
        a {
            display:block;
            color: #504e4e;
        }
        &:hover a{
            color: #FE9600;
        }
    }
    .p-time {
        position: absolute;
        right: 0;
        top: 16px;
        font-size: 12px;
        color: #989898;
        letter-spacing: 0;
        i{
            font-size: 14px;
            margin-right: 5px;
        }
    }
    .post-list p {
        min-height: 60px;
        margin: 0 0 0 17%;
        font-size: 15px;
        color: rgba(0,0,0,.66);
        letter-spacing: 0;
        line-height: 30px;
    }
    .entry-footer {
        margin: 0 0 0 17%;
        list-style: none;
    }
    .post-more {
        margin-top: 10px;
        text-align: right;
        i {
            font-size: 25px;
            color: #666;
        }
    }
    .info-meta {
        margin-top: 10px;
        position: absolute;
        top: 20px;
        opacity: 0;
        padding-top: 8px;
        border-top: 1px solid #ddd;
        -webkit-transform: translate3d(-150px,0,0);
        transform: translate3d(-150px,0,0);
        visibility: hidden;
        transition: .7s all ease;
        -webkit-transition: .6s all ease;
        -moz-transition: .6s all linear;
        -o-transition: .6s all ease;
        -ms-transition: .6s all ease;
    }
    .comnum {
        float: left;
    }
    .info-meta span {
        color: #000;
        font-size: 13px;
        vertical-align: bottom;
    }
    .info-meta i {
        margin-top: 3px;
        margin-right: 10px;
        float: left;
    }
    .info-meta a {
        color: #000;
    }
    .post-list hr {
        width: 30%;
        height: 1px;
        margin: 0 auto;
        border: 0;
        background: #efefef;
        margin-top: 20px;
    }
    .post-list:hover .info-meta {
        -webkit-transform: translate3d(-230px,0,0);
        transform: translate3d(-230px,0,0);
        opacity: 1;
        visibility: visible;
    }
    @media(max-width:768px){
        .feature{
            img{
                width: 52px;
                height: 52px;
            }
        }
        .entry-title{
            margin: 0 0 0 65px;
            font-size: 16px;
            line-height: 30px;
        }
        .p-time {
            position: relative;
            margin: -15px 0 0 65px;
        }        
        .post-list p{
            margin: 20px 0 0 65px;
            font-size: 14px;
            height: 30px;
            overflow: hidden;
            margin-bottom: 40px;
        }
        .entry-footer{
            display:none;
        }
    }
`;
