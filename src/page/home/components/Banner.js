import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {BannerWrapper, Center, Focusinfo} from '../style';
import {actionCreators} from '../store';

class Banner extends PureComponent {
    render() {
        const {banner, innerHeight} = this.props;
        return (
            <BannerWrapper>
                <Center style={{backgroundImage: banner,height:innerHeight+'px'}}>
                    <Focusinfo>
                        <h1 className='glitch' data-text="Hi, Mashiro!">Hi, Mashiro!</h1>
                        <div className='header-info'>
                            <p> You got to put the past behind you before you can move on. </p>
                            <div className='top-social_v2'>
                                <li onClick={this.props.changehBanner}>
                                    <img className='flipx' src={require('../../../statics/images/next-b.svg')} alt=""/>
                                </li>
                                <li><img src={require('../../../statics/images/github.png')} alt=""/></li>
                                <li><img src={require('../../../statics/images/sina.png')} alt=""/></li>
                                <li><img src={require('../../../statics/images/wangyiyun.png')} alt=""/></li>
                                <li><img src={require('../../../statics/images/zhihu.png')} alt=""/></li>
                                <li><img src={require('../../../statics/images/qq.png')} alt=""/></li>
                                <li><img src={require('../../../statics/images/email.svg')} alt=""/></li>
                                <li onClick={this.props.changehBanner}>
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
        this.props.getBanner();
        this.props.changeInnerHeight();
    }

}

const mapState = (state) => {
    return {
        bannerList: state.getIn(['home', 'bannerList']),
        banner: state.getIn(['home', 'banner']),
        innerHeight: state.getIn(['home', 'innerHeight']),
    }
};

const mapDispatch = (dispatch) => {
    return {
        getBanner() {
            dispatch(actionCreators.getBanner());
        },
        changehBanner() {
            dispatch(actionCreators.changehBanner());
        },
        changeInnerHeight(){
            window.onresize = ()=> {
                dispatch(actionCreators.changeInnerHeight());
            }
        }
    }
};

export default connect(mapState, mapDispatch)(Banner);
