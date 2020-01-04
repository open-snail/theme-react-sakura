import React, {PureComponent} from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import {GlobalStyle} from "./style";
import store from "./store";
import {Provider} from 'react-redux';
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToTop from './components/BackTop';
import Router from './router';
import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import axios from "axios";

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollToTop>
                        <div id='player'/>
                        <ToTop/>
                        <GlobalStyle/>
                        <Header/>
                        <Router/>
                        <Footer/>
                    </ScrollToTop>
                </BrowserRouter>
            </Provider>
        )
    }

    componentDidMount() {
        this.getMuisic();
    }

    getMuisic(){
        axios.get('/music/music/v1/list').then((res) => {
            const options = {
                container: document.getElementById('player'),
                fixed: true,
                theme: '#fe9600',
                listMaxHeight: '300px',
                listFolded: false,
                lrcType: 3,
                audio:res.models
            };
            const ap = new APlayer(options);
            ap.on('ended', function () {
                console.log('player ended');
            });
        })
    }
}

export default App;
