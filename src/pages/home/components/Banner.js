import React, {PureComponent} from "react";
import {BannerWrapper, Center, Focusinfo} from '../style';
import {scrollAnimation} from '../../../lib/auth';
import axios from "axios";

class Banner extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        };
    }

    render() {
        const {banner, innerHeight} = this.props;
        const {introduction} = this.props.userInfo.toJS();
        const {info} = this.state;
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
                    <Focusinfo>
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
                                <li onClick={this.props.getBanner}>
                                    <img className='flipx' src={require('../../../statics/images/next-b.svg')} alt=""/>
                                </li>
                                {
                                    info.map((item, index) => {
                                        if (item.showType === 1) {
                                            return (
                                                <li className='img' key={index}>
                                                    <img src={item.icon} alt=""/>
                                                    <div className='img-box'>
                                                        <img src={item.content} alt=""/>
                                                    </div>
                                                </li>
                                            )
                                        } else if (item.showType === 2) {
                                            return (
                                                <li className='text' key={index}>
                                                    <img src={item.icon} alt=""/>
                                                    <div className='text-box'>
                                                        <p>{item.content}</p>
                                                    </div>
                                                </li>
                                            )
                                        } else if (item.showType === 3) {
                                            return (
                                                <li className='link' key={index}>
                                                    <a href={item.content} target={'_blank'} rel="noopener noreferrer">
                                                        <img src={item.icon} alt=""/>
                                                    </a>
                                                </li>
                                            )
                                        }else {
                                            return null
                                        }
                                    })
                                }
                                <li onClick={this.props.getBanner}>
                                    <img src={require('../../../statics/images/next-b.svg')} alt=""/>
                                </li>
                            </div>
                        </div>
                    </Focusinfo>
                </Center>
            </BannerWrapper>
        )
    }

    componentDidMount() {
        axios.get('/auth/social/v1/info').then((res) => {
            if (res.success === 1) {
                const {models} = res;
                let array = [];
                for (let i = 0; i < models.length; i++) {
                    array.push({
                        show: false,
                        icon: models[i].icon,
                        content: models[i].content,
                        showType: models[i].showType,
                    })
                }
                this.setState({
                    info: array
                })
            }
        });
    }
}

function headertop_down() {
    const content = document.getElementById('content').offsetTop;
    scrollAnimation(0, content);
}

export default Banner
