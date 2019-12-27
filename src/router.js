import React,{PureComponent} from "react";
import {Route} from "react-router-dom";
import Home from "./pages/home";
import Article from "./pages/article";
import Category from "./pages/category";
import Archives from './pages/archives';
import {withRouter} from 'react-router-dom';

class Router extends PureComponent{
    render() {
        return(
            <div className='main-content' key={this.props.location.key}>
                <Route path='/' exact component={Home}/>
                <Route path='/article/:id' exact component={Article}/>
                <Route path='/category/:id' exact component={Category}/>
                <Route path='/archives' exact component={Archives}/>
            </div>
        )
    }
}

export default withRouter(Router)
