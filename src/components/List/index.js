import {BlogList} from "./style";
import {Link} from "react-router-dom";
import {getTime} from "../../lib/public";
import React from "react";

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
export default List
