import styled from 'styled-components';

export const CategoryArticleWrapper = styled.div`
    .pattern-center-blank{
        padding-top: 75px;
        background-color: #fff;
    }
`;

export const ArticleTop = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    &:before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.3);
    }
    &:after{
        content: '';
        width: 150%;
        height: 4.375rem;
        background: #fff;
        left: -25%;
        bottom: -2.875rem;
        border-radius: 100%;
        position: absolute;
    }
    .pattern-attachment-img{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-origin: border-box;
        width: 100%;
        height: 400px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }
    }
    .pattern-header {
        position: absolute;
        top: 45%;
        left: 0;
        right: 0;
        text-align: center;
        color: #fff;
        z-index: 1;
        h1{
            color: #fff;
            font-size: 40px;
            font-weight: 500;
            width: 80%;
            margin: auto;
            padding: 0;
            border: 0;
        }
    }
`;

export const MainWrapper = styled.div`
    min-height:600px;
    max-width: 900px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    padding-top:50px;
    background-color: rgba(255,255,255,.8);
    .page-header{
        position: relative;
        text-align: center;
        margin-bottom: 50px;
        color: #9C9C9C;
        h1{
            font-size: 20px;
            font-weight: 400;
            border: 1px dashed #ddd;
            padding: 15px;
            color: #828282;
            margin-bottom: 30px;
        }
    }
`;

export const SiteMain = styled.div`
    .post-list {
        margin: 0 0 8%;
        position: relative;
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
`;

export const PagInation = styled.div`
    width: 100%;
    padding: 20px 0;
    text-align: center;
    margin: 40px 0 80px;
    display: inline-block;
    .btn{
        display: inline-block;
        cursor: pointer;
        padding: 13px 35px;
        border: 1px solid #d6d6d6;
        border-radius: 50px;
        color: #adadad;
    }
    .btn:hover{
        border: 1px solid orange;
        color: #FE9600;
        border-color: #FE9600;
        box-shadow: 0 0 4px rgba(255,165,0,.85);
    }
    p{
        color: #989898;
        font-size: 15px;
    }
    .example{
        height:52px;
        line-height:52px;
        i{
            background-color: #FE9600;
        }
    }
`;
