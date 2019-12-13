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
