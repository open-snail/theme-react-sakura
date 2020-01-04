import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {BannerWrapper, Center, Focusinfo} from '../style';
import {actionCreators} from '../store';
import {scrollAnimation} from '../../../lib/auth';

class Banner extends PureComponent {
    render() {
        const {banner, innerHeight} = this.props;
        const {htmlUrl, weibo, csdn, twitter, facebook, qq, email, introduction} = this.props.userInfo.toJS();
        return (
            <BannerWrapper>
                <div className="waveWrapper waveAnimation">
                    <div className="waveWrapperInner bgTop">
                        <div className="wave waveTop"/>
                    </div>
                    <div className="waveWrapperInner bgMiddle">
                        <div className="wave waveMiddle"/>
                    </div>
                    <div className="waveWrapperInner bgBottom">
                        <div className="wave waveBottom"/>
                    </div>
                </div>
                <div className='headertop-down animated'>
                    <span onClick={this.headertop_down}><i className='iconfont icon-chevrondown'/></span>
                </div>
                <Center style={{backgroundImage: banner, height: innerHeight + 'px'}}>
                    {htmlUrl && <Focusinfo>
                        <h1 className='glitch' data-text="Hi, Mashiro!">Hi, Mashiro!</h1>
                        <div className='header-info'>
                            <p className='ellipsis'>
                                <i className='iconfont icon-quote-left'/>
                                <span>{introduction || 'You got to put the past behind you before you can move on.'}</span>
                                <i className='iconfont icon-quoteright'/>
                            </p>
                            <div className='top-social_v2'>
                                <li onClick={this.props.changehBanner}>
                                    <img className='flipx' src={require('../../../statics/images/next-b.svg')} alt=""/>
                                </li>
                                <li>
                                    <a href={htmlUrl} target={'_blank'}>
                                        <img src={require('../../../statics/images/github.png')} alt=""/>
                                    </a>
                                </li>
                                {csdn && <li>
                                    <a href={csdn} target={'_blank'}>
                                        <img src={require('../../../statics/images/csdn.png')} alt=""/>
                                    </a></li>
                                }
                                {weibo && <li>
                                    <a href={weibo} target={'_blank'}>
                                        <img src={require('../../../statics/images/sina.png')} alt=""/>
                                    </a></li>
                                }
                                {twitter && <li>
                                    <a href={twitter} target={'_blank'}>
                                        <img src={require('../../../statics/images/twitter.png')} alt=""/>
                                    </a></li>
                                }
                                {facebook && <li>
                                    <a href={facebook} target={'_blank'}>
                                        <img src={require('../../../statics/images/Facebook.png')} alt=""/>
                                    </a></li>
                                }
                                {qq && <li>
                                    <a href={`tencent://message/?uin={{${qq}}`} target={'_blank'}>
                                        <img src={require('../../../statics/images/qq.png')} alt=""/>
                                    </a></li>
                                }
                                {email && <li onClick={() => this.mail_me(email)}>
                                    <img src={require('../../../statics/images/email.svg')} alt=""/></li>
                                }
                                <li onClick={this.props.changehBanner}>
                                    <img src={require('../../../statics/images/next-b.svg')} alt=""/>
                                </li>
                            </div>
                        </div>
                    </Focusinfo>}
                </Center>
            </BannerWrapper>
        )
    }

    componentDidMount() {
        this.props.getBanner();
        this.props.changeInnerHeight();
    }

    mail_me(email) {
        const e = `mailto:${email}`;
        window.open(e)
    }

    headertop_down() {
        const content = document.getElementById('content').offsetTop;
        scrollAnimation(0,content);
    }
}

const mapState = (state) => {
    return {
        bannerList: state.getIn(['home', 'bannerList']),
        banner: state.getIn(['home', 'banner']),
        innerHeight: state.getIn(['home', 'innerHeight']),
        userInfo: state.getIn(['header', 'userInfo']),
    }
};

const mapDispatch = (dispatch) => {
    return {
        changehBanner() {
            dispatch(actionCreators.changehBanner());
        },
        getBanner() {
            dispatch(actionCreators.getBanner());
        },
        changeInnerHeight() {
            window.onresize = () => {
                dispatch(actionCreators.changeInnerHeight());
            }
        },
    }
};

export default connect(mapState, mapDispatch)(Banner);
