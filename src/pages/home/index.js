import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Banner from "./components/Banner";
import List from './components/List';
import Feature from "./components/Feature";
import {HomeWrapper, MainWrapper} from './style';
import {actionCreators} from "./store";

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <Banner/>
                <MainWrapper>
                    <Feature/>
                    <List/>
                </MainWrapper>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        if (!this.props.isList) {
            this.props.getBlogList(1, true);
        }
        this.props.randomThumb();
        this.props.getBanner();
        this.props.changeInnerHeight();
        this.props.getFeature();
    }
}

const mapState = (state) => {
    return {
        isList: state.getIn(['home', 'isList'])
    }
};

const mapDispatch = (dispatch) => {
    return {
        getBlogList(page, override) {
            dispatch(actionCreators.getBlogList(page, override))
        },
        randomThumb() {
            dispatch(actionCreators.randomThumb())
        },
        getBanner() {
            dispatch(actionCreators.getBanner());
        },
        changeInnerHeight(){
            window.onresize = ()=> {
                dispatch(actionCreators.changeInnerHeight());
            }
        },
        getFeature() {
            dispatch(actionCreators.getFeature());
        }
    }
};

export default connect(mapState, mapDispatch)(Home);
