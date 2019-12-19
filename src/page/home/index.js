import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Banner from "./components/Banner";
import List from './components/List';
import Feature from "./components/Feature";
import {HomeWrapper, MainWrapper} from './style';

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
}

const mapState = (state) => {
    return{

    }
};

const mapDispatch = (dispatch) => {
    return{

    }
};
export default connect(mapState, mapDispatch)(Home);
