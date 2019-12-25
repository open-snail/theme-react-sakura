import React from "react";
import {connect} from 'react-redux';
import {BannerWrapper, Center, Focusinfo} from '../style';
import {actionCreators} from '../store';

const Banner = (props) => {
    const {banner, innerHeight} = props;
    return (
        <BannerWrapper>
            <Center style={{backgroundImage: banner, height: innerHeight + 'px'}}>
                <Focusinfo>
                    <h1 className='glitch' data-text="Hi, Mashiro!">Hi, Mashiro!</h1>
                    <div className='header-info'>
                        <p> You got to put the past behind you before you can move on. </p>
                        <div className='top-social_v2'>
                            <li onClick={props.changehBanner}>
                                <img className='flipx' src={require('../../../statics/images/next-b.svg')} alt=""/>
                            </li>
                            <li><img src={require('../../../statics/images/github.png')} alt=""/></li>
                            <li><img src={require('../../../statics/images/sina.png')} alt=""/></li>
                            <li><img src={require('../../../statics/images/wangyiyun.png')} alt=""/></li>
                            <li><img src={require('../../../statics/images/zhihu.png')} alt=""/></li>
                            <li><img src={require('../../../statics/images/qq.png')} alt=""/></li>
                            <li><img src={require('../../../statics/images/email.svg')} alt=""/></li>
                            <li onClick={props.changehBanner}>
                                <img src={require('../../../statics/images/next-b.svg')} alt=""/>
                            </li>
                        </div>
                    </div>
                </Focusinfo>
            </Center>
        </BannerWrapper>
    )
};

const mapState = (state) => {
    return {
        bannerList: state.getIn(['home', 'bannerList']),
        banner: state.getIn(['home', 'banner']),
        innerHeight: state.getIn(['home', 'innerHeight']),
    }
};

const mapDispatch = (dispatch) => {
    return {
        changehBanner() {
            dispatch(actionCreators.changehBanner());
        }
    }
};

export default connect(mapState, mapDispatch)(Banner);
