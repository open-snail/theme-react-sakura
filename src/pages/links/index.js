import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {LinksWrapper, LinksTop, MainWrapper} from './style';
import axios from "axios";
import {Spin} from "antd";

const LinksList = (props) => {
    const {list, loading} = props;
    if (loading) {
        return (
            <div className="example">
                <Spin size="large"/>
            </div>
        )
    } else {
        return (
            <div className='links'>
                {list.length ? <ul className='link-items fontSmooth'>
                    {list.map((item, index) => {
                        return (
                            <li className='link-item post-list-show ' key={index}>
                                <a href={item.href} target={'_blank'}>
                                    <img src={item.logo} alt=""/>
                                    <span className="sitename">{item.name}</span>
                                    <div className="linkdes">{item.description}</div>
                                </a>
                            </li>
                        )
                    })}
                </ul> : <p>去找点新朋友玩吧...</p>}
            </div>
        )
    }
};

class Links extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            timg: '',
            list: [],
            loading: true
        }
    }

    render() {
        const {list, loading} = this.state;
        return (
            <LinksWrapper>
                <div className='pattern-center-blank'/>
                <LinksTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src={this.state.timg} alt=""/>
                    </div>
                    <div className='pattern-header '>
                        <h1>友人帐</h1>
                    </div>
                </LinksTop>
                <MainWrapper>
                    <LinksList list={list} loading={loading}/>
                </MainWrapper>
            </LinksWrapper>
        )
    }

    componentDidMount() {
        this.getLinks();
        this.getTimg();
    }

    getLinks() {
        this.setState({loading: true});
        axios.get('/link/link/v1/list').then((res) => {
            if (res.success === 1) {
                this.setState({
                    list: res.models,
                    loading: false
                })
            }
        });
    }

    getTimg() {
        const list = this.props.topImg;
        const num = this.getrand(0, list.length - 1);
        this.setState({timg: list[num].img})
    }

    getrand(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }
}

const mapState = (state) => {
    return {
        topImg: state.getIn(['image', 'topImg'])
    }
};

export default connect(mapState)(Links)
