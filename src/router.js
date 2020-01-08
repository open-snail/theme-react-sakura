import React,{PureComponent} from "react";
import {Route, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import Home from "./pages/home";
import Article from "./pages/article";
import Category from "./pages/category";
import Archives from './pages/archives';
import Links from "./pages/links";
import Tags from "./pages/tags";
import TagList from "./pages/tags/list";
import Search from "./pages/search";
import Error from "./pages/error";

class Router extends PureComponent{
    render() {
        return(
            <Switch key={this.props.location.key}>
                <Route path='/' exact component={Home}/>
                <Route path='/article/:id' exact component={Article}/>
                <Route path='/category/:id' exact component={Category}/>
                <Route path='/archives' exact component={Archives}/>
                <Route path='/links' exact component={Links}/>
                <Route path='/tags' exact component={Tags}/>
                <Route path='/tags/:id' exact component={TagList}/>
                <Route path='/search/:key' exact component={Search}/>
                <Route component={Error}/>
            </Switch>
        )
    }
}

export default withRouter(Router)
