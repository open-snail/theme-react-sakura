import styled from 'styled-components';

export const ArticleWrapper =  styled.div`
    .pattern-center-blank{
        padding-top: 75px;
        background-color: #fff;
    }
`;

export const ArticleTop =  styled.div`
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
    .single-header{
        max-width: 900px;
        padding: 0 10px;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        top: auto;
        bottom: 20px;
        position: absolute;
        left: 0;
        right: 0;
        color: #fff;
        text-shadow: 2px 2px 10px #000;
        z-index: 1;
        .entry-title{
            font-size: 32px;
            width: 100%;
            color: #fff;
            font-weight: bold;
        }
        .entry-census{
            color: #fff;
            font-size: 14px;
            padding: 18px 0 0;
            line-height: 39px;
            span{
                color: #fff;
                font-size: 14px;
            }
            .bull {
                margin: 0 5px;
            }
        }
    }
`;

export const MainWrapper = styled.div`
    width:100%;
    max-width: 900px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    padding-top:50px;
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
    
    .entry-content {
        position: relative
    }
    
    .entry-content .begin,.single-begin {
        float: left;
        font-size: 3.6em;
        line-height: 1em;
        margin-right: 3px;
        margin-top: 2px;
        font-weight: 700
    }
    
    @media screen and (max-width: 860px) {
        .entry-content .begin,.single-begin {
            margin-top:6px
        }
    }
    
    .entry-content ul {
        list-style: disc;
        border: 1px dashed #e4e4e4;
        padding: 15px 10px 15px 50px;
        color: #616161;
        margin-left: 0;
        border-radius: 10px
    }
    
    .entry-content ol {
        list-style: decimal;
        border: 1px dashed #e4e4e4;
        padding: 15px 10px 15px 50px;
        color: #616161;
        margin-left: 0;
        border-radius: 10px
    }
    
    .entry-content ol li,.entry-content ul li {
        padding: 8px 0
    }
    
    .entry-content h3 {
        padding-bottom: 8px;
        border-bottom: 1px dashed #ddd;
        color: #737373;
        margim:17px 0;
    }
    
    .entry-content h3,.entry-content h4,.entry-content h5 {
        padding-left: 16px
    }
    
    .entry-content h1{
        margin:16px 0;
        clear:both;
        font-size:24px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h2{
        margin:18px 0;
        clear:both;
        font-size:22px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h3{
        margin:17px 0;
        clear:both;
        font-size:20px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h4{
        margin:16px 0;
        clear:both;
        font-size:18px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h5{
        margin:15px 0;
        clear:both;
        font-size:16px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h6{
        margin:14px 0;
        clear:both;
        font-size:14px;
        color:rgb(64, 64, 64);
    }
    
    .entry-content h2:after,.entry-content h1:after {
        content: "\\00B6";
        position: absolute;
        color: #ff6d6d;
        font-family: 'Merriweather Sans',Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
        padding-left: 6px;
        font-size: 1.03em
    }
    
    .serif .entry-content h2:after,.serif .entry-content h1:after {
        content: "\\00B6";
        position: absolute;
        color: #ff6d6d;
        font-family: 'Merriweather Sans',Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
        padding-left: 6px;
        font-size: 1.13em
    }
    
    .entry-content h3:after {
        content: "#";
        left: 0;
        position: absolute;
        color: #ff6d6d
    }
    
    .entry-content h4:after {
        content: "â–Œ";
        left: 0;
        position: absolute;
        color: #ff6d6d
    }
    
    .entry-content h5:after {
        content: "â™¯";
        left: 0;
        position: absolute;
        color: #ff6d6d
    }
    
    .entry-content a {
        color: #e67474;
        position: relative
    }
    
    .entry-content a:hover {
        color: orange;
        text-decoration: none
    }
    
    .entry-content a:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: orange;
        transform-origin: bottom right;
        transition: transform .25s ease-out
    }
    
    .entry-content a:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left
    }
    
    .entry-content p {
        color: #797979;
        margin: 15px 0 22px; 0
        line-height: 30px;
    }
    
    .entry-content hr {
        margin-top: 40px;
        margin-bottom: 40px;
        display: block;
        border: 0;
        text-align: center;
        background: 0 0
    }
    
    .entry-content hr:before {
        content: '...';
        display: inline-block;
        margin-left: .6em;
        color: rgba(0,0,0,.8);
        position: relative;
        top: -30px;
        font-size: 28px;
        letter-spacing: .6em
    }
    
    .entry-content .post-password-form {
        text-align: center
    }
    
    .entry-content a img.alignleft,.entry-content a img.alignright,.entry-content a img.aligncenter {
        cursor: -webkit-zoom-in
    }
    
    
    pre{
        position: relative;
        background: #2b3940;
        border-radius: 5px;
        line-height: 1.6;
        margin-bottom: 1.6em;
        font-size: 15px;
        max-width: 100%;
        overflow: auto;
        text-shadow: none;
        color: #000;
        padding: 20px;
        box-shadow: 0 10px 30px 0px rgba(0,0,0,.4);
    }
    code{
        color: #fff;
        word-break: break-word;
        padding: 2px;
        text-shadow: none;
        border-radius: 0 0 5px 5px;
    }
`;
