import styled from "styled-components";

export const NavWrapper = styled.div`
    width: 100%;
    height: 75px;
    position:fixed;
    top:0;
    padding:0 30px
    background: rgba(255,255,255,.95);
    box-shadow: 0 1px 40px -8px rgba(0,0,0,.5);
    z-index:999;
`;

export const NavLeft = styled.div`
    float:left;
    height:75px;
    line-height:75px;
    max-width:120px;
    a{
        color: #464646;
        font-size: 20px;
        font-weight: 800;
    }
    a:hover{
        color:#fe9600;
    }
`;
export const NavRight = styled.div`
    float:right;
    height:75px;
`;

export const Nav = styled.ul`
    height:75px;
`;

export const NavItem = styled.li`
    padding:0 15px;
    .nav-item{
        display:block;
        color: #666666;
        font-size:16px;
        height:40px;
        line-height:40px;
        position: relative;
    }
    .nav-item:after{
        content: "";
        display: block;
        position: absolute;
        bottom: -17px;
        height: 6px;
        background-color: #fe9600;
        width: 0px;
        transition: width .25s ease-in-out;
    }
    &:hover .nav-item{
        color:#fe9600;
    }
    &:hover .nav-item:after{
        width:100%;
    }
    .NavDropdown ul{
        padding:10px;
        text-align: center;
        box-shadow: 0 1px 40px -8px rgba(0,0,0,.5);
    }
    .NavDropdown ul li:hover{
        background:none;
    }
    .NavDropdown ul li:hover a{
        color:#fe9600;
    }
    .NavDropdown ul:before{
        content: "";
        position: absolute;
        top: -20px;
        left: 50%;
        margin-left: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent #fff transparent;
    }
`;

export const IconBox = styled.div`
    margin-left:20px;
    i{
        font-size:24px;
        margin-right:20px;
        color:#666666;
        cursor: pointer;
    }
    i:hover{
        color:#fe9600;
    }
`;
