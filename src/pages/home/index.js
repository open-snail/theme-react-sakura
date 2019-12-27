import React, {PureComponent} from 'react';
import Banner from "./components/Banner";
import ListWrapper from './components/List';
import Feature from "./components/Feature";
import {HomeWrapper, MainWrapper} from './style';

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <Banner/>
                <MainWrapper>
                    <Feature/>
                    <ListWrapper/>
                </MainWrapper>
            </HomeWrapper>
        )
    }
}

export default Home;
