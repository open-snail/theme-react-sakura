import React from "react";
import {BannerWrapper, Center, Focusinfo} from '../style';
import {scrollAnimation} from '../../../lib/auth';

const Banner = (props) => {
    const {banner, innerHeight} = props;
    const {htmlUrl, weibo, csdn, twitter, facebook, qq, email, introduction, avatar} = props.userInfo.toJS();
    const list = this.props.socialList.toJS();
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
                <span onClick={headertop_down}><i className='iconfont icon-chevrondown'/></span>
            </div>
            <Center style={{backgroundImage: banner, height: innerHeight + 'px'}}>
                {htmlUrl && <Focusinfo>
                    <h1 className='glitch' data-text="Helloblog!">Helloblog!</h1>
                    {/*<div className='header-tou'>*/}
                    {/*    <img src={avatar}  alt=''/>*/}
                    {/*</div>*/}
                    <div className='header-info'>
                        <p className='ellipsis'>
                            <i className='iconfont icon-quote-left'/>
                            <span>{introduction || 'You got to put the past behind you before you can move on.'}</span>
                            <i className='iconfont icon-quoteright'/>
                        </p>
                        <div className='top-social_v2'>
                            <li onClick={props.getBanner}>
                                <img className='flipx' src={require('../../../statics/images/next-b.svg')} alt=""/>
                            </li>
                            <li>
                                <a href={htmlUrl} target={'_blank'}>
                                    <img src={require('../../../statics/images/github.png')} alt=""/>
                                </a>
                            </li>

                            {
                                list.map(item =>{
                                    return (
                                        <li>
                                            <a href={item.url} target={'_blank'}>
                                                <img src={item.icon} alt=""/>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                            {/*{csdn && <li>*/}
                            {/*    <a href={csdn} target={'_blank'}>*/}
                            {/*        <img src={require('../../../statics/images/csdn.png')} alt=""/>*/}
                            {/*    </a></li>*/}
                            {/*}*/}
                            {/*{weibo && <li>*/}
                            {/*    <a href={weibo} target={'_blank'}>*/}
                            {/*        <img src={require('../../../statics/images/sina.png')} alt=""/>*/}
                            {/*    </a></li>*/}
                            {/*}*/}
                            {/*{twitter && <li>*/}
                            {/*    <a href={twitter} target={'_blank'}>*/}
                            {/*        <img src={require('../../../statics/images/twitter.png')} alt=""/>*/}
                            {/*    </a></li>*/}
                            {/*}*/}
                            {/*{facebook && <li>*/}
                            {/*    <a href={facebook} target={'_blank'}>*/}
                            {/*        <img src={require('../../../statics/images/Facebook.png')} alt=""/>*/}
                            {/*    </a></li>*/}
                            {/*}*/}
                            {/*{qq && <li>*/}
                            {/*    <a href={`tencent://message/?uin={{${qq}}`} target={'_blank'}>*/}
                            {/*        <img src={require('../../../statics/images/qq.png')} alt=""/>*/}
                            {/*    </a></li>*/}
                            {/*}*/}
                            {/*{email && <li onClick={() => mail_me(email)}>*/}
                            {/*    <img src={require('../../../statics/images/email.svg')} alt=""/></li>*/}
                            {/*}*/}
                            <li onClick={props.getBanner}>
                                <img src={require('../../../statics/images/next-b.svg')} alt=""/>
                            </li>
                        </div>
                    </div>
                </Focusinfo>}
            </Center>
        </BannerWrapper>
    )
};

function mail_me(email) {
    const e = `mailto:${email}`;
    window.open(e)
}

function headertop_down() {
    const content = document.getElementById('content').offsetTop;
    scrollAnimation(0, content);
}

export default Banner
