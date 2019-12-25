import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {FeatureTitle, HomeList, BlogList, PagInation} from "../style";
import {getTime} from '../../../lib/public';
import {Spin} from 'antd';
import {actionCreators} from "../store";

const pagInation = (props) => {
    const {page, finished, loading} = props;
    if (finished) {
        return (
            <p>很高兴你翻到这里，但是真的没有了...</p>
        )
    } else {
        if (loading) {
            return (
                <div className="example">
                    <Spin size="large"/>
                </div>
            )
        } else {
            return (
                <div onClick={() => props.getBlogList(page)} className='btn'>Previous</div>
            )
        }
    }
};

const blogList = (props) => {
    const {blogList} = props;
    const list = blogList.toJS();
    const Class = ['blog-item post-list-show left', 'blog-item post-list-show right'];
    return (
        <BlogList>
            {list.map((item, index) => {
                return (
                    <div className={Class[index % Class.length]} key={index}>
                        <div className='post-thumb'>
                            <Link to={'/article/' + item.id}>
                                <img src={item.thumbnail} alt=""/>
                            </Link>
                        </div>
                        <div className='post-content-wrap'>
                            <div className='post-content'>
                                <div className='post-date'>
                                    <i className='iconfont icon-time'/>
                                    {getTime(item.createTime)}
                                </div>
                                <Link to={'/article/' + item.id} className='post-title'>
                                    <h3>{item.title}</h3>
                                </Link>
                                <div className='post-meta'>
                                        <span>
                                            <i className='iconfont icon-attention'/>
                                            {item.views} 热度
                                        </span>
                                    <span className='comments-number'>
                                            <i className='iconfont icon-mark'/>
                                        {item.comments} 评论
                                        </span>
                                    <span>
                                            <i className='iconfont icon-file'/> JavaScript
                                        </span>
                                </div>
                                <div className='float-content'>
                                    <p>{item.summary}</p>
                                    <div className='post-bottom'>
                                        <Link to={'/article/' + item.id}>
                                            <i className='iconfont icon-caidan'/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </BlogList>
    )
};

const List = (props) => {
    return (
        <HomeList>
            <FeatureTitle>
                <h1><i className='iconfont icon-envira'/><span> Discovery</span></h1>
            </FeatureTitle>
            {blogList(props)}
            <PagInation>
                {pagInation(props)}
            </PagInation>
        </HomeList>
    )
};

const mapState = (state) => {
    return {
        blogList: state.getIn(['home', 'blogList']),
        page: state.getIn(['home', 'articlePage']),
        finished: state.getIn(['home', 'finished']),
        loading: state.getIn(['home', 'loading'])
    }
};

const mapDispatch = (dispatch) => {
    return {
        getBlogList(page, override) {
            dispatch(actionCreators.getBlogList(page, override))
        },
    }
};

export default connect(mapState, mapDispatch)(List);
