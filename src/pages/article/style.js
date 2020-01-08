import styled from 'styled-components';
import hr from '../../statics/images/hr.gif';

export const ArticleWrapper = styled.div`
    .pattern-center-blank{
        padding-top: 75px;
        background-color: #fff;
    }
    @media(max-width:768px){
        .pattern-center-blank{
            padding-top: 50px;
        }
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
                img{
                    width: 35px;
                    height: 35px;
                    border-radius: 100%;
                    float: left;
                    margin-right: 12px;
                }
            }
            .bull {
                margin: 0 5px;
            }
        }
    }
    @media(max-width:768px){
        .pattern-attachment-img{
            height:280px;
        }
        .single-header{
            .entry-title{
                font-size: 24px;
            }
            .entry-census{
                padding:0;
            }
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
    .cell{
        margin-right:25px;
    }
    .entry-content {
        position: relative;
        animation: main 1s;
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
        border-radius: 10px;
        margin:16px 0;
    }
    
    .entry-content ol {
        list-style: decimal;
        border: 1px dashed #e4e4e4;
        padding: 15px 10px 15px 50px;
        color: #616161;
        margin-left: 0;
        border-radius: 10px;
        margin:16px 0;
    }
    
    .entry-content table {
      display: block;
      width: 100%;
      overflow: auto;
    }
    
    .entry-content table th {
      font-weight: 600;
    }
    
    .entry-content table th,.entry-content table td {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }
    
    .entry-content table tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
    }
    
    .entry-content table tr:nth-child(2n) {
      background-color: #f6f8fa;
    }
    
    .entry-content blockquote {
        padding: 0 1em;
        color: #6a737d;
        border-left: .25em solid #dfe2e5;
    }
    
    .entry-content blockquote>:first-child {
      margin-top: 0;
    }
    
    .entry-content blockquote>:last-child {
      margin-bottom: 0;
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
        padding-left: 16px;
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
        font-size: 1.03em;
    }
    
    .entry-content h3:after {
        content: "#";
        left: 0;
        position: absolute;
        color: #ff6d6d;
    }
    
    .entry-content h4:after {
        content: "â–Œ";
        left: 0;
        position: absolute;
        color: #ff6d6d;
    }
    
    .entry-content h5:after {
        content: "â™¯";
        left: 0;
        position: absolute;
        color: #ff6d6d;
    }
    
    .entry-content a {
        color: #e67474;
        position: relative;
    }
    
    .entry-content a:hover {
        color: orange;
        text-decoration: none;
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
        transition: transform .25s ease-out;
    }
    
    .entry-content a:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    
    .entry-content p {
        color: #797979;
        margin: 15px 0 22px;
        line-height: 30px;
    }
    
    .entry-content hr {
        max-width: 100%;
        height: 50px;
        background: url(${hr}) 100% no-repeat;
        border: none;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
    .entry-content .post-password-form {
        text-align: center;
    }
    
    .entry-content a img.alignleft,.entry-content a img.alignright,.entry-content a img.aligncenter {
        cursor: -webkit-zoom-in;
    }
    
    .entry-content img{
        max-width:100%;
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
    
    .example {
        text-align: center;
        border-radius: 4px;
        margin-bottom: 20px;
        padding: 30px 50px;
        margin: 20px 0;
        i{
            background-color: #FE9600;
        }
    }
    .toc{
        width:200px;
        h3{
            padding: 7px 0 7px 16px;
            line-height: 1.143;
            font-size: 16px;
            font-weight: bold;
            color: #FE9600;
        }
        .ant-anchor-link-active > .ant-anchor-link-title{
            color: #FE9600;
        }
        .ant-anchor-link-title:hover{
            color: #FE9600;
        }
        .ant-anchor-ink-ball{
            border: 2px solid #FE9600;
        }
    }
    .flex-items{
        align-items: initial;
    }
    @media(max-width:768px){
        padding:10px;
        min-height:400px;
        .cell{
            margin:0;
        }
        .toc{
            display:none;
        }
    }
`;

export const CommentsWrapper = styled.div`
    padding-top: 40px;
    .comments-list-title{
        width: 100%;
        margin: 0 auto;
        margin-bottom: 40px;
        color: #7d7d7d;
        font-weight: 400;
        span{
            font-size: 13px;
            font-weight: 400;
            color: #909090;
        }
    }
    .commentwrap{
        margin: 0 auto 30px;
        .comment{
            .commentinfo{
                img{
                    width:40px;
                    height:40px;
                    border-radius: 100%;
                    box-shadow: 0 1px 10px -6px rgba(0,0,0,.5);
                    margin-right: 15px;
                }
                .commeta{
                    h2{
                        color: #FE9600;
                        font-size: 15px;
                        font-weight: 600;
                        line-height:20px;
                    }
                    h3{
                        line-height:20px;
                        font-size: 12px;
                        letter-spacing: 0px;
                        text-transform: none;
                        color: rgba(0,0,0,.35);
                    }
                }
                .comment-reply-link{
                    font-size: 12px;
                    display: block;
                    margin-left: 10px;
                    float: right;
                    text-transform: uppercase;
                    color: #fff;
                    height: 20px;
                    background-color: #FE9600;
                    line-height: 20px;
                    padding: 0 6px;
                    border-radius: 3px;
                    cursor: url(${require('../../statics/images/ayuda.cur')}),auto;
                    opacity: 0;
                    transition: color .2s ease-out,border .2s ease-out,opacity .2s ease-out;
                }
            }
            &:hover .comment-reply-link{
                opacity: .9;
            }
            .body{
                line-height: 32px;
                color: #63686d;
                border-bottom: 1px solid rgba(0,0,0,.05);
                position: relative;
                p{
                    font-size: 14px;
                    line-height: 30px;
                    margin-top: 10px;
                    padding-bottom: 20px;
                    padding-left: 3px;
                    color: #63686d;
                    span{
                        font-size: 12px;
                        color: #909090;
                        margin-right:3px;
                    }
                }
            }
            hr{
                height: 0;
                width: 100%;
                background: #eee;
                border: 0;
                margin: 40px 0
            }
        }
    }
    .pagination{
        margin:20px 0;
        .ant-pagination-item{
            border:none;
            font-family: inherit;
            font-size: 15px;
        }
        .ant-pagination-item a{
            font-family: inherit;
            font-size: 15px;
        }
        .ant-pagination-item-active a{
            color: #FE9600;
        }
        .ant-pagination-item:focus a, .ant-pagination-item:hover a{
            color: #FE9600;
        }
        .ant-pagination-next,.ant-pagination-prev{
            color: #FE9600;
            font-family: inherit;
            font-size: 15px;
        }
        .ant-pagination-next span,.ant-pagination-prev span{
            color: #FE9600;
            font-family: inherit;
            font-size: 15px;
        }
        .ant-pagination-next:hover span,.ant-pagination-prev:hover span{
            color: #FE9600;
        }
        .ant-pagination-disabled span{
            color: rgba(0, 0, 0, 0.25);
        }
        .ant-pagination-disabled:hover span{
            color: rgba(0, 0, 0, 0.25);
        }
    }
    .text{
        font-size:14px;
        padding: 20px 0;
    }
`;

export const CommentTextarea = styled.div`
     position: relative
     .commentbody{
        width:100%;
        background: #fff;
        padding: 21px 21px 20px;
        font-size: 14px;
        display: block;
        height: 180px;
        margin-bottom: 10px;
        color: #535a63;
        border: 1px solid #ddd;
        background-color: transparent;
        background-image: url(https://view.moezx.cc/images/2018/03/24/comment-bg.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        resize: vertical;
        border-radius: 6px;
        outline:none;
     }
    .commentbody:focus{
        border: 1px solid #FE9600; 
    }
    .form-submit {
        clear: both;
        display: block;
        overflow: hidden;
        margin: 20px 0;
        input{
            background: #fff;
            border-radius: 6px;
            width:100%;
            margin: 0;
            padding: 15px 25px;
            text-transform: none;
            color: #535a63;
            -webkit-transition: all .1s ease-out;
            -moz-transition: all .1s ease-out;
            transition: all .1s ease-out;
            box-shadow: none;
            border: 1px solid #ccc;
            text-shadow: none;
            cursor: url(${require('../../statics/images/ayuda.cur')}),auto;
        }
        input:hover{
            border: 1px solid #fe9600;
            border-color: #FE9600;
            color: #FE9600;
        }
    }
`;
