import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import {GlobalStyle} from "./style";
import store from "./store";
import {Provider} from 'react-redux';
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from './pages/home';
import Article from "./pages/article";
import { BackTop } from 'antd';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollToTop>
                        <BackTop />
                        <GlobalStyle/>
                        <Header/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/article/:id' exact component={Article}/>
                        <Footer/>
                    </ScrollToTop>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
