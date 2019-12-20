import styled from 'styled-components';
import grid from '../../statics/images/grid.png';

export const BannerWrapper = styled.div`
	position: relative;
    overflow: hidden;
    height: auto;
    &:before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 3;
        background-attachment: fixed;
        background-image: url(${grid});
    }
`;

export const Center = styled.div`
    width: 100%;
    height: 550px;
    height:1235px;
    margin: 0;
    padding: 0;
    background-position: top center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    z-index: -1;
`;

export const Focusinfo = styled.div`
    position: relative;
    max-width: 800px;
    padding: 0 10px;
    top: 49.3%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    text-align: center;
    z-index: 99;
    -webkit-transition: .4s ease all;
    -moz-transition: .4s ease all;
    -o-transition: .4s ease all;
    transition: .4s ease all;  
    .glitch{
        font-family: 'Ubuntu',sans-serif;
        position: relative;
        color: #fff;
        mix-blend-mode: lighten;
        margin: auto;
        font-size: 80px;
        text-transform: uppercase;
        font-weight: bold;
    }
    .glitch:before, .glitch:after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        width: 100%;
        background: rgba(0,0,0,0);
        clip: rect(0,0,0,0);
    }
    .glitch:before {
        left: -1px;
        text-shadow: 1px 0 #ff3f1a;
    }
    .glitch:after {
        left: 1px;
        text-shadow: -1px 0 #00a7e0;
    }
    .glitch:hover:before {
        text-shadow: 4px 0 #ff3f1a;
        animation: glitch-loop-1 .8s infinite ease-in-out alternate-reverse;
    }
    .glitch:hover:after {
        text-shadow: -5px 0 #00a7e0;
        animation: glitch-loop-2 .8s infinite ease-in-out alternate-reverse;
    }
    @-webkit-keyframes glitch-loop-1 {
        0% {
            clip: rect(36px,9999px,9px,0)
        }
    
        25% {
            clip: rect(25px,9999px,99px,0)
        }
    
        50% {
            clip: rect(50px,9999px,102px,0)
        }
    
        75% {
            clip: rect(30px,9999px,92px,0)
        }
    
        100% {
            clip: rect(91px,9999px,98px,0)
        }
    }
    
    @keyframes glitch-loop-1 {
        0% {
            clip: rect(36px,9999px,9px,0)
        }
    
        25% {
            clip: rect(25px,9999px,99px,0)
        }
    
        50% {
            clip: rect(50px,9999px,102px,0)
        }
    
        75% {
            clip: rect(30px,9999px,92px,0)
        }
    
        100% {
            clip: rect(91px,9999px,98px,0)
        }
    }
    
    @-webkit-keyframes glitch-loop-2 {
        0% {
            top: -1px;
            left: 1px;
            clip: rect(65px,9999px,119px,0)
        }
    
        25% {
            top: -6px;
            left: 4px;
            clip: rect(79px,9999px,19px,0)
        }
    
        50% {
            top: -3px;
            left: 2px;
            clip: rect(68px,9999px,11px,0)
        }
    
        75% {
            top: 0;
            left: -4px;
            clip: rect(95px,9999px,53px,0)
        }
    
        100% {
            top: -1px;
            left: -1px;
            clip: rect(31px,9999px,149px,0)
        }
    }
    
    @keyframes glitch-loop-2 {
        0% {
            top: -1px;
            left: 1px;
            clip: rect(65px,9999px,119px,0)
        }
    
        25% {
            top: -6px;
            left: 4px;
            clip: rect(79px,9999px,19px,0)
        }
    
        50% {
            top: -3px;
            left: 2px;
            clip: rect(68px,9999px,11px,0)
        }
    
        75% {
            top: 0;
            left: -4px;
            clip: rect(95px,9999px,53px,0)
        }
    
        100% {
            top: -1px;
            left: -1px;
            clip: rect(31px,9999px,149px,0)
        }
    }
    .header-info {
        position: relative;
        width: 63%;
        margin: auto;
        font-size: 16px;
        color: #eaeadf;
        background: rgba(0,0,0,.5);
        padding: 15px;
        margin-top: 22px;
        letter-spacing: 0;
        line-height: 30px;
        border-radius: 10px;
        box-sizing: initial;
        white-space: nowrap;
    }
    .header-info:before {
        content: "";
        position: absolute;
        top: -30px;
        left: 15%;
        border-width: 15px;
        border-style: solid;
        border-color: transparent transparent rgba(0,0,0,.5) transparent;
    }
    .header-info p {
        margin: 0;
        font-family: 'Ubuntu',sans-serif;
        font-weight: 700;
    }
    .top-social_v2 {
        height: 35px;
        margin-bottom:-10px;
        list-style: none;
        display: inline-block;
    }
    .top-social_v2 li {
        height: 35px;
        float: left;
        margin:0 6px;
        cursor: pointer;
    }
    .top-social_v2 img {
        height: 35px;
        width: 35px;
        padding: 6px;
        background: 0 0;
    }
    .flipx {
        -moz-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        transform: scaleX(-1);
        filter: FlipH;
    }
`;

export const HomeWrapper = styled.div`
    width:100%;
`;

export const MainWrapper = styled.div`
    width:100%;
    max-width: 900px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255,255,255,.8);
    animation: main 1s;
    @keyframes main {
        0% {
            opacity: 0;
            transform: translateY(50px)
        }
        100% {
            opacity: 1;
            transform: translateY(0)
        }
    }
`;

export const FeatureWrapper = styled.div`
    .top-feature-row{
        .top-feature-item{
            position: relative;
            height: 160px;
            box-shadow: 1px 1px 3px rgba(0,0,0,.3);
            overflow: hidden;
            border-radius: 10px;
            a{
                display:block;
                height:100%;
            }
            .img-box{
                transition: all .35s ease-in-out;
                transform: scale(1);
                height:100%;
                img{
                    width:100%;
                    height:100%;
                }
            }
            &:hover .img-box{
                transform: scale(1.2);
            }
            .info{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                text-align: center;
                backface-visibility: hidden;
                background: #333;
                background: rgba(0,0,0,.6);
                visibility: hidden;
                opacity: 0;
                transition: all .35s ease-in-out;
                h3{
                    text-transform: uppercase;
                    color: #fff;
                    text-align: center;
                    font-size: 17px;
                    padding: 10px;
                    background: #111;
                    margin: 40px 0 0;
                    transition: all .35s ease-in-out;
                    transform: translateX(-100%);
                }
                p{
                    font-style: italic;
                    font-size: 12px;
                    position: relative;
                    color: #bbb;
                    padding: 20px;
                    text-align: center;
                    transition: all .35s .1s linear;
                    transform: translateX(100%);
                    margin-top:20px;
                }
            }
            &:hover .info{
                visibility: visible;
                opacity: 1;
                h3{
                    transform: translateX(0);
                }
                p{
                    transform: translateX(0);
                }
            }
        }
    }
`;

export const FeatureTitle = styled.div`
    width: 100%;
    height: auto;
    margin-top: 55px;
    display: inline-block;
    h1{
        color: #666;
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px;
        line-height:24px;
        padding-bottom: 5px;
        margin-bottom: 30px;
        border-bottom: 1px dashed #ececec;
    }
`;

export const HomeList = styled.div`
    width: 100%;
`;

export const BlogList = styled.div`
    width: 100%;
    .blog-item{
        width: 100%;
        height: 300px;
        position: relative;
        margin: 30px 0;
        border-radius: 10px;
        background-color: rgba(255,255,255,0);
        box-shadow: 0 1px 20px -6px rgba(0,0,0,.5);
        opacity: 0;
        transition: box-shadow .3s ease;
        &:hover{
            box-shadow: 0 5px 10px 5px rgba(110,110,110,.4);
        }
        &:hover img{
            transform: scale(1.1);
        }
        .post-thumb {
            float: right;
            width: 55%;
            a{
                height: 300px;
                position: relative;
                display: block;
                background-repeat: no-repeat;
                background-size: cover;
                overflow: hidden;
                border-radius: 0 10px 10px 0;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    pointer-events: none;
                    transition: all .6s;
                    filter: blur(0px);
                }
            }
        }
    }
    
    .post-content-wrap {
        position: relative;
        display: inline-block;
        float: right;
        padding-right: 30px;
        padding-left: 0;
        width: 40%;
        margin: 30px 10px 0;
        .post-date, .post-meta, .post-meta a {
            color: #888;
            font-size: 14px;
        }
        i {
            margin-right: 5px;
            color: #989898;
            font-size: 14px;
        }
        .post-title{
            display:block;
            margin:18px 0;
            h3 {
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                word-wrap: break-word;
                font-size: 16px;
                font-weight: bold;
                color: #504e4e;
                line-height:20px;
                transition: color .2s ease-out,border .2s ease-out,opacity .2s ease-out;
            }
            &:hover h3{
                color: #FE9600;
            }
        } 
        .comments-number{
            margin: 0 10px;
        }
        .float-content {
            position: relative;
            width: 100%;
            right: 0;
            margin: 0;
            padding: 0;
            z-index: 50;
            color: rgba(0,0,0,.66);
            p{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                height: 69px;
                overflow: hidden;
                margin:16px 0 22px 0;
                font-size: 15px;
                color: rgba(0,0,0,.66);
                line-height:23px;
            }
            i {
                font-size: 25px;
                color: #666;
                &:hover{
                    color: #FE9600;
                }
            }
        }
    }
    .right{
        .post-thumb {
            float: left;
            a {
                border-radius: 10px 0 0 10px;
            }
        }
        .post-content-wrap {
            float: left;
            padding-left: 30px;
            padding-right: 0;
            text-align: right;
            margin: 30px 10px 10px 0;
        }
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
`;
