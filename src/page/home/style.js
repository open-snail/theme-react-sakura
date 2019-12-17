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
`;

export const BannerWaveOne = styled.div`
    
`;

export const BannerWaveTwo = styled.div`
    
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
        left: 15%;
        border-width: 15px;
        border-style: solid;
        border-color: transparent transparent rgba(0,0,0,.5) transparent;
    }
    .header-info p {
        margin: 0;
        font-family: 'Ubuntu',sans-serif;
        font-weight: 700;
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
        cursor: pointer;
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

`;

export const MainWrapper = styled.div`

`;
