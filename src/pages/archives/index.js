import React, {PureComponent} from "react";
import axios from "axios";
import {ArchivesWrapper, ArticleTop, MainWrapper} from "./style";
import {Link} from 'react-router-dom';

class Archives extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    render() {
        const {list} = this.state;
        const Class = ['info', 'dark', 'success', 'black', 'warning', 'primary', 'danger'];
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
                    <div className='wrapper-md'>
                        <ul className='timeline'>
                            {list.map((item, index) => {
                                return (
                                    <div className={Class[index % Class.length]} key={index}>
                                        <li className='tl-header'>
                                            <h2 className='title'>{this.setYears(item.archiveDate)}</h2>
                                        </li>
                                        {item.archivePosts.map((item2, index2) => {
                                            return (
                                                <div className='tl-body' key={index2}>
                                                    <li className='tl-item'>
                                                        <div className='tl-wrap'>
                                                            <span
                                                                className='tl-date'>{this.setDay(item2.createTime)}</span>
                                                            <h3 className="tl-content">
                                                                <span className="arrow left"/>
                                                                <Link to={'/article/' + item2.id}
                                                                      className="text-lt">{item2.title}</Link>
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
                </MainWrapper>
            </ArchivesWrapper>
        )
    }

    componentDidMount() {
        this.getArchives();
    }

    getArchives() {
        axios.get('/posts/archive/v1/list').then((res) => {
            if (res.success === 1) {
                this.setState({
                    list: res.models
                })
            }
        });
    }

    setYears(time) {
        const date = new Date(time);
        let Y = date.getFullYear() + '年';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
        return (Y + M)
    }

    setDay(time) {
        const date = new Date(time);
        return date.getDate() + '日'
    }
}

export default Archives
