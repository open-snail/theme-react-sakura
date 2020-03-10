import React, {PureComponent} from 'react';
import Banner from "./components/Banner";
import ListWrapper from './components/List';
import Feature from "./components/Feature";
import {HomeWrapper, MainWrapper} from './style';
import {actionCreators} from "./store";
import {connect} from "react-redux";
import {getrand} from "../../lib/public";

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            banner: '',
            innerHeight: window.innerHeight,
        };
        this.getBanner = this.getBanner.bind(this);
    }

    render() {
        const {banner, innerHeight} = this.state;
        const {userInfo, featureList, ListImg} = this.props;
        return (
            <HomeWrapper>
                <Banner banner={banner} innerHeight={innerHeight} getBanner={this.getBanner} userInfo={userInfo}/>
                <MainWrapper id='content'>
                    <Feature featureList={featureList} ListImg={ListImg}/>
                    <ListWrapper/>
                </MainWrapper>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.changeInnerHeight();
        this.getBanner();
        this.props.getFeature();
    }

    getBanner() {
        const banner = this.props.bannerList;
        const num = getrand(0, banner.length - 1);
        this.setState({
            banner: `url('${banner[num].img}')`
        })
    }

    changeInnerHeight() {
        window.onresize = () => {
            this.setState({
                innerHeight: window.innerHeight,
            })
        }
    }
}

const mapState = (state) => {
    return {
        userInfo: state.getIn(['header', 'userInfo']),
        featureList: state.getIn(['home', 'featureList']),
        ListImg: state.getIn(['image', 'ListImg']),
        bannerList: state.getIn(['image', 'bannerList'])
    }
};

const mapDispatch = (dispatch) => {
    return {
        getFeature() {
            dispatch(actionCreators.getFeature());
        }
    }
};

export default connect(mapState, mapDispatch)(Home);
