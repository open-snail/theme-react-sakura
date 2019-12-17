import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Banner from "./components/Banner";
import List from './components/List';
import {HomeWrapper,MainWrapper} from './style';

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <Banner/>
                <MainWrapper>
                    <List/>
                </MainWrapper>
            </HomeWrapper>
        )
    }
}
const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({

});
export default connect(mapState, mapDispatch)(Home);
