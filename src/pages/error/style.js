import styled from 'styled-components';

export const Eroor = styled.div`
    .container{
        min-height: 600px;
        max-width: 900px;
        padding: 0 10px;
        margin-left: auto;
        margin-right: auto;
        background-color: rgba(255,255,255,.8);
        padding-top:50px;
    }
    .pattern-center-blank{
        padding-top: 75px;
        background-color: #fff;
    }
    .container{
        height:900px;
    }
    img{
        display: block;
        margin:20px auto 0;
        max-width:100%;
    }
    h2{
        text-align: center;
        color: #333;
    }
    .btn{
        text-align: center;
        padding:30px 0;
        a{
            padding: 10px 30px;
            margin: 0 10px;
            border: 1px solid orange;
            color: orange;
            border-radius: 50px;
        }
        a:hover{
            box-shadow: 0 0 4px rgba(255,165,0,.85);
        }
    }
    @media(max-width:768px){
        .pattern-center-blank{
            padding-top: 50px;
        }
        .container{
            height:auto;
        }
    }
`;
