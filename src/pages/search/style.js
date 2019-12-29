import styled from "styled-components";

export const SearchWrapper = styled.div`
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

export const MainWrapper = styled.div`
    min-height:600px;
    max-width: 900px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    padding-top:50px;
    background-color: rgba(255,255,255,.8);
    animation: main 1s;
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
    .example{
        height:52px;
        line-height:52px;
        text-align: center;
        i{
            background-color: #FE9600;
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
