import styled from 'styled-components';

export const CategoryArticleWrapper = styled.div`
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
        }
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
