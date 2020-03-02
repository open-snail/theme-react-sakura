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
    @keyframes move_wave { 
        0% { 
            transform: translateX(0) translateZ(0) scaleY(1) 
        } 
        50% { 
            transform: translateX(-25%) translateZ(0) scaleY(0.55) 
        } 
        100% { 
            transform: translateX(-50%) translateZ(0) scaleY(1) 
        } 
    } 
    .waveWrapper {
        overflow: hidden; 
        position: absolute; 
        left: 0; 
        right: 0; 
        bottom: 0; 
        top: 0; 
        margin: auto; 
    } 
    .waveWrapperInner { 
        position: absolute; 
        width: 100%; 
        overflow: hidden; 
        height: 100%; 
        bottom: -1px; 
    } 
    .bgTop { 
        z-index: 15; 
        opacity: 0.5; 
    } 
    .bgMiddle { 
        z-index: 10; 
        opacity: 0.75; 
    } 
    .bgBottom {
        z-index: 5; 
    } 
    .wave{
        position: absolute; 
        left: 0; 
        width: 200%; 
        height: 100%; 
        background-repeat: repeat no-repeat; 
        background-position: 0 bottom; 
        transform-origin: center bottom; 
    } 
    .waveTop { 
        background-size: 50% 100px; 
    } 
    .waveAnimation .waveTop { 
        animation: move-wave 3s; 
        -webkit-animation: move-wave 3s; 
        -webkit-animation-delay: 1s; 
        animation-delay: 1s; 
    } 
    .waveMiddle { 
        background-size: 50% 120px; 
    } 
    .waveAnimation .waveMiddle { 
        animation: move_wave 10s linear infinite; 
    } 
    .waveBottom { 
        background-size: 50% 100px; 
    } 
    .waveAnimation .waveBottom { 
        animation: move_wave 15s linear infinite; 
    } 
    .waveTop{
        background-image: url('${require('../../statics/images/wave-top.png')}');
    }
    .waveMiddle{
        background-image: url('${require('../../statics/images/wave-mid.png')}');
    }
    .waveBottom{
        background-image: url('${require('../../statics/images/wave-bot.png')}');
    }
    .headertop-down {
        position: absolute;
        bottom: 80px;
        left: 50%;
        cursor: pointer;
        z-index: 90;
        animation: float 2s linear infinite;
        i{
            font-size: 32px;
            color: #fff;
            -ms-transform: scale(1.5,1);
            -webkit-transform: scale(1.5,1);
            transform: scale(1.5,1)
        }
    }
    @-webkit-keyframes float {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }
    
        50% {
            -webkit-transform: translateY(-6px);
            transform: translateY(-6px)
        }
    
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }
    }
    
    @keyframes float {
        0% {
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0)
        }
    
        50% {
            -webkit-transform: translateY(-6px);
            -ms-transform: translateY(-6px);
            transform: translateY(-6px)
        }
    
        100% {
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0)
        }
    }
    @media (max-width: 768px) {
        .waveWrapper{
            display:none
        }
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
    @media (max-width: 768px){
        display: none;
    }
    .header-tou{
        img{
            box-shadow: inset 0 0 10px #000;
            padding: 5px;
            opacity: 1;
            transform: rotate(0);
            transition: all ease 1s;
            width: 130px;
            height: 130px;
            border-radius: 100%;
        }
    }
    .header-tou img:hover {
        transform: rotate(360deg);
    }
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
        left: 50%;
        margin-left:-15px;
        border-width: 15px;
        border-style: solid;
        border-color: transparent transparent rgba(0,0,0,.5) transparent;
    }
    .header-info p {
        margin: 0;
        font-family: 'Ubuntu',sans-serif;
        font-weight: 700;
        span{
            margin:0 10px;
        }
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
        cursor: url(${require('../../statics/images/ayuda.cur')}),auto;
        position: relative;
    }
    .top-social_v2 li {
        .img-box{
            position: absolute;
            border-radius: 6px;
            transition: .7s all ease;
            width: 121px;
            height: 121px;
            padding: 4px;
            background: rgba(0, 0, 0, .4);
            top: 40px;
            left: 50%;
            transform: translate3d(0, 50px, 0) translateX(-50%);
            opacity: 0;
            &:before {
                content: "";
                position: absolute;
                top: -30px;
                left: 50%;
                margin-left: -15px;
                border-width: 15px;
                border-style: solid;
                border-color: transparent transparent rgba(0, 0, 0, .4) transparent;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
        .text-box{
            position: absolute;
            border-radius: 4px;
            transition: .7s all ease;
            background: rgba(0, 0, 0, .4);
            top: 40px;
            left: 50%;
            transform: translate3d(0, 50px, 0) translateX(-50%);
            opacity: 0;
            &:before {
                content: "";
                position: absolute;
                top: -30px;
                left: 50%;
                margin-left: -15px;
                border-width: 15px;
                border-style: solid;
                border-color: transparent transparent rgba(0, 0, 0, .4) transparent;
            }
            p{
                color: #ffffff;
                font-weight: normal;
                font-size: 12px;
                padding: 2px 5px;
            }
        }
    }
    .top-social_v2 li:hover .img-box{
        transform: translate3d(0, 16px, 0) translateX(-50%);
        opacity: 1;
        visibility: visible;
    }
    .top-social_v2 li:hover .text-box{
        transform: translate3d(0, 16px, 0) translateX(-50%);
        opacity: 1;
        visibility: visible;
    }
    .top-social_v2 li:hover .text-box{
        display:block;
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
        @media (min-width: 768px){
            &:hover{
                box-shadow: 0 5px 10px 5px rgba(110,110,110,.4);
            }
            &:hover img{
                transform: scale(1.1);
            }
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
    @media (max-width: 768px){
        .blog-item{
            margin: 0;
            height: auto;
            padding: 0;
            border: 0;
            box-shadow: none;
            .post-thumb{
                width: 100%;
                left: 0;
                clear: initial;
                a{
                    height: 210px;
                    border-radius: 10px;
                }
            }
            .post-content-wrap{
                clear: initial;
                width: 100%;
                left: 0;
                text-align: left;
                margin: 0;
                padding: 20px;
                float: none;
                box-shadow: none;
                border-top: 0;
                .post-title{
                    margin:10px 0;
                    font-size: 14px;
                }
                .float-content{
                    p{
                        margin:10px 0;
                        font-size: 14px;
                    }
                }
            }
        }
    }
`;

export const FeatureWrapper = styled.div`
    @media (max-width: 768px){
        display: none;
    }
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
                    padding:0 20px;
                    text-align: center;
                    transition: all .35s .1s linear;
                    transform: translateX(100%);
                    margin-top:15px;
                    height:40px;
                    line-height:20px;
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
    @media( max-width:768px ){
        margin-top: 15px;
        h1{
            margin-bottom: 15px;
        }
    }
`;

export const HomeList = styled.div`
    width: 100%;
`;
