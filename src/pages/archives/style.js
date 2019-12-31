import styled from 'styled-components';

export const ArchivesWrapper = styled.div`
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
    @media(max-width:768px){
        .pattern-attachment-img{
            height:280px;
        }
        .pattern-header {
            top:40%;
            h1{
                font-size:24px;
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
    .example{
        height:52px;
        line-height:52px;
        text-align: center;
        i{
            background-color: #FE9600;
        }
    }
    .wrapper-md{
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
    }
    .timeline {
        padding: 0;
        margin: 0;
    }
    .tl-header {
        display: block;
        width: 8em;
        margin-right: 2px;
        margin-left: 2px;
        text-align: center;
        h2{
            color: #ffffff;
            border-radius: 50px;
            font-weight: 500;
            display: inline-block;
            padding: 5px 15px;
            font-size: 12px;
            line-height: 1.5;
            border: 1px solid transparent;
        }
    }
    .tl-item {
        display: block;
    }
    .tl-item:after, .tl-item:before {
        display: table;
        content: " ";
    }
    .tl-item:after {
        clear: both;
    }
    .tl-wrap {
        display: block;
        padding: 15px 0 15px 20px;
        margin-left: 4em;
        border-color: #dee5e7;
        border-style: solid;
        border-width: 0 0 0 4px;
    }
    .tl-wrap:after, .tl-wrap:before {
        display: table;
        content: " ";
    }
    .tl-wrap:after {
        clear: both;
    }
    .tl-wrap:before {
        position: relative;
        top: 15px;
        float: left;
        width: 10px;
        height: 10px;
        margin-left: -27px;
        background: #edf1f2;
        border-color: inherit;
        border-style: solid;
        border-width: 3px;
        border-radius: 50%;
        content: "";
        box-shadow: 0 0 0 4px #f0f3f4;
    }
    .tl-date {
        position: relative;
        top: 10px;
        display: block;
        float: left;
        width: 4.5em;
        margin-left: -7.5em;
        text-align: right;
        font-size: 14px;
    }
    .tl-content {
        position: relative;
        display: inline-block;
        padding-top: 10px;
        padding-bottom: 10px;
        border: 1px solid transparent;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
        padding-right: 15px;
        padding-left: 15px;
        a{
            color: #ffffff;
            font-size: 14px;
        }
    }
    .arrow {
        z-index: 10;
        border-width: 9px;
        left: -9px;
        margin-top: -9px;
        border-right-color: rgba(255,255,255,.1);
        border-left-width: 0;
        top: 19px;
    }
    .arrow:after {
        border-width: 8px;
        content: "";
    }
    .arrow, .arrow:after {
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    .arrow.left:after {
        bottom: -8px;
        left: 1px;
        border-right-color: #fff;
        border-left-width: 0;
    }
    .start{
        border-radius: 50px;
        color: #58666e;
        background-color: #fff;
        border-color: #dee5e7;
        box-shadow: 0 1px 1px rgba(90,90,90,.1);
        font-weight: 500;
        padding: 5px 15px;
        font-size: 12px;
        display: inline-block;
        text-align: center;
        cursor: url(${require('../../statics/images/ayuda.cur')}),auto;
        border: 1px solid transparent;
    }
    .info .title {
        background-color: #23b7e5;
        border-color: #23b7e5;
    }
    
    .info .tl-wrap{
        border-color: #23b7e5;
    }
    
    .info .tl-content{
        background-color: #23b7e5;
    }
    
    .info .arrow:after {
        border-right-color: #23b7e5;
    }
    
    .dark .title {
        background-color: #3a3f51;
        border-color: #3a3f51;
    }
    
    .dark .tl-wrap{
        border-color: #3a3f51;
    }
    
    .dark .tl-content{
        background-color: #3a3f51;
    }
    
    .dark .arrow:after {
        border-right-color: #3a3f51;
    }    

    .success .title {
        background-color: #27c24c;
        border-color: #27c24c;
    }
    
    .success .tl-wrap{
        border-color: #27c24c;
    }
    
    .success .tl-content{
        background-color: #27c24c;
    }
    
    .success .arrow:after {
        border-right-color: #27c24c;
    } 
    
    .black .title {
        background-color: #1c2b36;
        border-color: #1c2b36;
    }
    
    .black .tl-wrap{
        border-color: #1c2b36;
    }
    
    .black .tl-content{
        background-color: #1c2b36;
    }
    
    .black .arrow:after {
        border-right-color: #1c2b36;
    } 
    
    .warning .title {
        background-color: #fad733;
        border-color: #fad733;
    }
    
    .warning .tl-wrap{
        border-color: #fad733;
    }
    
    .warning .tl-content{
        background-color: #fad733;
    }
    
    .warning .arrow:after {
        border-right-color: #fad733;
    } 
    
    .primary .title {
        background-color: #7266ba;
        border-color: #7266ba;
    }
    
    .primary .tl-wrap{
        border-color: #7266ba;
    }
    
    .primary .tl-content{
        background-color: #7266ba;
    }
    
    .primary .arrow:after {
        border-right-color: #7266ba;
    } 
    
    .danger .title {
        background-color: #f05050;
        border-color: #f05050;
    }
    
    .danger .tl-wrap{
        border-color: #f05050;
    }
    
    .danger .tl-content{
        background-color: #f05050;
    }
    
    .danger .arrow:after {
        border-right-color: #f05050;
    }
    @media(max-width:768px){
        padding-top:30px;
        min-height:400px;
        .page-header{
            margin-bottom: 30px;
                h1{
                    font-size: 16px;
                    font-weight: 400;
                    border: 1px dashed #ddd;
                    padding:10px;
                    color: #828282;
                }
        }
    }
`;
