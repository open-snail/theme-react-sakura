import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {FeatureTitle, HomeList, BlogList} from "../style";
import {Link} from "react-router-dom";
import {getrand, getTime} from "../../../lib/public";
import PagInation from '../../../components/PagInation';
import * as constants from "../store/constants";
import axios from "axios";
import {fromJS} from "immutable";

const List = (props) => {
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
                                    发布于 {getTime(item.createTime)}
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
                                    {item.categoryName && <span>
                                        <i className='iconfont icon-file'/>
                                        {item.categoryName}
                                    </span>}
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

class ListWrapper extends PureComponent {
    render() {
        const {page, finished, loading} = this.props;
        return (
            <HomeList>
                <FeatureTitle>
                    <h1><i className='iconfont icon-envira'/><span> Discovery</span></h1>
                </FeatureTitle>
                {List(this.props)}
                <PagInation
                    page={page}
                    finished={finished}
                    loading={loading}
                    getList={this.props.getBlogList.bind(this.props)}
                />
            </HomeList>
        )
    }

    componentDidMount() {
        if (!this.props.isList) {
            this.props.getBlogList(1, true);
        }
    }
}

const mapState = (state) => {
    return {
        blogList: state.getIn(['home', 'blogList']),
        page: state.getIn(['home', 'articlePage']),
        finished: state.getIn(['home', 'finished']),
        loading: state.getIn(['home', 'loading']),
        isList: state.getIn(['home', 'isList']),
        ListImg: state.getIn(['image', 'ListImg']),
    }
};

const setBlogList = (data, nextPage, override) => ({
    type: constants.GET_BLOGLIST,
    data: fromJS(data),
    nextPage,
    override
});

const setfinished = () => ({
    type: constants.SET_FINISHED,
});

const list = (thumbList, data) => {
    const list = data;
    const Img = thumbList;
    let arr = [];
    for (let i = 0; i < list.length; i++) {
        arr.push({
            id: list[i].id,
            title: list[i].title,
            thumbnail: list[i].thumbnail || Img[getrand(0, Img.length - 1)].img,
            comments: list[i].comments,
            status: list[i].status,
            summary: list[i].summary,
            views: list[i].views,
            createTime: list[i].createTime,
            syncStatus: list[i].syncStatus,
            author: list[i].author,
            categoryName: list[i].categoryName
        })
    }
    return arr
};

const mapDispatch = (dispatch) => {
    return {
        getBlogList(page, override) {
            dispatch({type: constants.LOADING_TRUE});
            axios.get('/posts/posts/v1/list', {
                params: {
                    page: page,
                    size: 10
                }
            }).then((res) => {
                if (res.success === 1) {
                    let current = res.pageInfo.page * res.pageInfo.size;
                    let total = res.pageInfo.total;
                    let data = list(this.ListImg, res.models);
                    dispatch(setBlogList(data, page + 1, override));
                    if (current > total) dispatch(setfinished());
                }
            });
        },
    }
};

export default connect(mapState, mapDispatch)(ListWrapper);
