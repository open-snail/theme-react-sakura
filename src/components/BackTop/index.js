import React, {PureComponent} from "react";
import {Top} from './style';
import {BackTop} from 'antd';

class ToTop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            gotoTop: false
        };
        this.toTopfun = this.toTopfun.bind(this);
    }

    render() {
        return (
            <Top>
                <div className={this.state.gotoTop ? 'toTop hidden' : 'toTop goTop hidden'}>
                    <BackTop visibilityHeight={600} onClick={this.toTopfun}/>
                    <img src={require('../../statics/images/scroll.png')} alt=""/>
                </div>
                <div className='phone-backtop'>
                    <BackTop visibilityHeight={600}/>
                </div>
            </Top>
        )
    }

    componentDidMount() {
        window.onscroll = () => {
            let t = document.documentElement.scrollTop || document.body.scrollTop;
            this.setState({
                gotoTop: t > 600
            })
        }
    }

    toTopfun() {
        this.setState({
            gotoTop: false,
        });
    }
}

export default ToTop
