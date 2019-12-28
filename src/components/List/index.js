import React from "react";
import {Link} from "react-router-dom";
import {SiteMain} from "./style";
import {getTime} from "../../lib/public";

const CatList = (props) => {
    let {list} = props;
    return (
        <SiteMain>
            {list.map((item, index) => {
                return (
                    <article className='post post-list post-list-show' key={index}>
                        <div className='post-entry'>
                            <div className='feature'>
                                <Link to={'/article/' + item.id}>
                                    <img src={item.thumbnail} alt=""/>
                                </Link>
                            </div>
                            <h1 className='entry-title'>
                                <Link to={'/article/' + item.id}>{item.title}</Link>
                            </h1>
                            <div className='p-time'><i className='iconfont icon-time'/>发布于 {getTime(item.createTime)}
                            </div>
                            <p>{item.summary}</p>
                            <footer className='entry-footer'>
                                <div className='post-more'>
                                    <Link to={'/article/' + item.id}>
                                        <i className='iconfont icon-caidan'/>
                                    </Link>
                                </div>
                                <div className='info-meta'>
                                    <div className='comnum'>
                                        <span>
                                            <i className="iconfont icon-attention"/>{item.views} 热度
                                        </span>
                                    </div>
                                    <div className='views'>
                                        <span className="comments-number">
                                            <i className="iconfont icon-mark"/>{item.comments} 评论
                                        </span>
                                    </div>
                                </div>
                            </footer>
                        </div>
                        <hr/>
                    </article>
                )
            })}
        </SiteMain>
    )
};

export default CatList
