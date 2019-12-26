import React, {PureComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import {GlobalStyle} from "./style";
import store from "./store";
import {Provider} from 'react-redux';
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/home';
import Article from "./pages/article";
import Category from './pages/category';
import ToTop from './components/BackTop';

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollToTop>
                        <ToTop/>
                        <GlobalStyle/>
                        <Header/>
                        <Route path='/' exact component={Home}/>
                        <Route path='/article/:id' exact component={Article}/>
                        <Route path='/category/:id' exact component={Category}/>
                        <Footer/>
                    </ScrollToTop>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
