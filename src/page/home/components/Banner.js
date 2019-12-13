import React, {Component} from "react";
import {BannerWrapper, Center} from '../style';

class Banner extends Component{
    render() {
        return(
            <BannerWrapper>
                <Center style={{backgroundImage:this.getBanner()}}>banner</Center>
            </BannerWrapper>
        )
    }
    getBanner(){
        const bannerList = [
            {img:require('../../../statics/images/BG-001.jpg')},
            {img:require('../../../statics/images/BG-002.jpg')}
        ];
        const num = this.getrand(0,bannerList.length-1);
        return 'url('+bannerList[num].img+')'
    }
    getrand(m,n){
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }
}

export default Banner
