import React, {Component} from "react";
import {BannerWrapper, Center, Focusinfo} from '../style';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: this.getBanner()
        };
        this.changeBanner = this.changeBanner.bind(this);
    }

    render() {
        return (
            <BannerWrapper>
                <Center style={{backgroundImage: this.state.backgroundImage}}>
                    <Focusinfo>
                        <h1 className='glitch' data-text="Hi, Mashiro!">Hi, Mashiro!</h1>
                        <div className='header-info'>
                            <p> You got to put the past behind you before you can move on. </p>
                            <div className='top-social_v2'>
                                <li onClick={this.changeBanner}><img className='flipx' src={require('../../../statics/images/next-b.svg')} alt=""/>
                                </li>
                                <li><img src={require('../../../statics/images/github.png')} alt=""/></li>
                                <li><img src={require('../../../statics/images/sina.png')} alt=""/></li>
                                <li><img src={require('../../../statics/images/wangyiyun.png')} alt=""/></li>
                                <li><img src={require('../../../statics/images/zhihu.png')} alt=""/></li>
                                <li><img src={require('../../../statics/images/qq.png')} alt=""/></li>
                                <li><img src={require('../../../statics/images/email.svg')} alt=""/></li>
                                <li onClick={this.changeBanner}><img
                                    src={require('../../../statics/images/next-b.svg')} alt=""/></li>
                            </div>
                        </div>
                    </Focusinfo>
                </Center>
            </BannerWrapper>
        )
    }

    changeBanner() {
        this.setState(()=>{
            return{
                backgroundImage: this.getBanner()
            }
        })
    }

    getBanner() {
        const bannerList = [
            {img: require('../../../statics/images/BG-001.jpg')},
            {img: require('../../../statics/images/BG-002.jpg')}
        ];
        const num = this.getrand(0, bannerList.length - 1);
        return 'url(' + bannerList[num].img + ')'
    }

    getrand(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }
}

export default Banner
