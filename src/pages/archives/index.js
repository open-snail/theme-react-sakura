import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import axios from "axios";
import {ArchivesWrapper, ArticleTop, MainWrapper} from "./style";
import {Link} from 'react-router-dom';
import {Spin} from "antd";

const setYears = (time) => {
    const date = new Date(time);
    let Y = date.getFullYear() + '年';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
    return (Y + M)
};

const setDay = (time) => {
    const date = new Date(time);
    return date.getDate() + '日'
};

const ArchivesList = (props) => {
    const {list, loading} = props;
    const Class = ['info', 'dark', 'success', 'black', 'warning', 'primary', 'danger'];
    if (loading) {
        return (
            <div className="example">
                <Spin size="large"/>
            </div>
        )
    } else {
        return (
            <div className='wrapper-md'>
                <ul className='timeline'>
                    {list.map((item, index) => {
                        return (
                            <div className={Class[index % Class.length]} key={index}>
                                <li className='tl-header'>
                                    <h2 className='title'>{setYears(item.archiveDate)}</h2>
                                </li>
                                {item.archivePosts.map((item2, index2) => {
                                    return (
                                        <div className='tl-body' key={index2}>
                                            <li className='tl-item'>
                                                <div className='tl-wrap'>
                                                    <span className='tl-date'>
                                                        {setDay(item2.createTime)}
                                                    </span>
                                                    <h3 className="tl-content">
                                                        <span className="arrow left"/>
                                                        <Link to={'/article/' + item2.id} className="text-lt">
                                                            {item2.title}
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </li>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                    <div className='tl-header'>
                        <div className="start">开始</div>
                    </div>
                </ul>
            </div>
        )
    }
};

class Archives extends PureComponent {
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
            <ArchivesWrapper>
                <div className='pattern-center-blank'/>
                <ArticleTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src={this.state.timg} alt=""/>
                    </div>
                    <div className='pattern-header '>
                        <h1>文章归档</h1>
                    </div>
                </ArticleTop>
                <MainWrapper>
                    <ArchivesList list={list} loading={loading}/>
                </MainWrapper>
            </ArchivesWrapper>
        )
    }

    componentDidMount() {
        this.getArchives();
        this.getTimg();
    }

    getArchives() {
        this.setState({loading: true});
        axios.get('/posts/archive/v1/list').then((res) => {
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

export default connect(mapState)(Archives)
