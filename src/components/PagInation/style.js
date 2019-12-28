import styled from "styled-components";

export const PagWrapper = styled.div`
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
