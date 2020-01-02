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
        const layer = new APlayer({
            container: document.getElementById('player'),
            fixed: true,
            theme: '#fe9600',
            listMaxHeight: 90,
            listFolded: false,
            lrcType: 3,
            audio: [
                {
                    name: '清新的小女孩 (For Ma) [缅甸抖音曲]',
                    artist: 'July Tun',
                    url: 'http://image.bygit.cn/July%20Tun%20-%20%E6%B8%85%E6%96%B0%E7%9A%84%E5%B0%8F%E5%A5%B3%E5%AD%A9%20%28For%20Ma%29%20%5B%E7%BC%85%E7%94%B8%E6%8A%96%E9%9F%B3%E6%9B%B2%5D.mp3',
                    cover: 'http://p1.music.126.net/85K1NQ3EvON42Ufj3oOt6Q==/109951164546190942.jpg?param=130y130',
                    theme: '#fe9600',
                    lrc: 'http://image.bygit.cn/%E6%AD%8C%E8%AF%8D.lrc'
                }
            ]
        });
        setTimeout(() => {
            layer.play();
        }, 2000)
    }
}

export default App;
