import styled from "styled-components";
import logo from '../../statics/images/sakura.svg';

export const Footers = styled.footer`
    padding: 2%;
    background: rgba(255,255,255,.8);
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    .site-info {
        text-align: center;
        font-size: 13px;
        color: #b9b9b9;
        .footertext .foo-logo {
            background-image: url(${logo});
            width: 30px;
            height: 30px;
            opacity: .3;
            margin: 0 auto;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            animation: poi-deg 12s infinite linear;
            -webkit-animation: poi-deg 12s infinite linear;
        }
        p{
            margin:15px 0;
            a{
                color: #b9b9b9;
            }
        }
        .name{
            span{
                color: #666666;
            }
            i{
                color: #e74c3c;
            }
            a{
                color: #000000;
                text-decoration:none;
            }
        }
    }
    .footer-sponsor{
        img{
            width:52px;
            margin-right:10px;
        }
    }
    @keyframes poi-deg {
        0% {
            transform: rotate(0deg)
        }
    
        100% {
            transform: rotate(360deg)
        }
    }
    
    @-webkit-keyframes poi-deg {
        0% {
            transform: rotate(0deg)
        }
    
        100% {
            transform: rotate(360deg)
        }
    }
`;

