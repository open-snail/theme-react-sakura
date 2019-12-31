import React, {PureComponent} from "react";
import {CommentsWrapper, CommentTextarea} from '../style';
import {getFormatTime, getTime} from '../../../lib/public';
import {Pagination, message} from 'antd';
import axios from "axios";
import {loginGithubHandel} from '../../../lib/auth';
import openWindow from '../../../lib/openWindow';

class Comments extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            isComment: props.isComment,
            commentsList: [],
            pageInfo: {},
            value: '',
            parentId: '',
            preContent: ''
        };
        this.setValue = this.setValue.bind(this);
        this.addComments = this.addComments.bind(this);
        this.reply = this.reply.bind(this);
    }

    render() {
        const {pageInfo, id, commentsList, isComment} = this.state;
        return (
            <CommentsWrapper>
                <h3 className='comments-list-title'>Comments | <span className="noticom">{pageInfo.total} 条评论 </span>
                </h3>
                <ul className='commentwrap'>
                    {commentsList.map((item, index) => {
                        return (
                            <li className='comment' key={index}>
                                <div className='commentinfo flex-items'>
                                    <img src={item.authorAvatar} alt=""/>
                                    <div className='commeta cell'>
                                        <h2>{item.authorName}</h2>
                                        <h3>{getTime(item.createTime)} | {getFormatTime(item.createTime)}</h3>
                                    </div>
                                    <span onClick={() => this.reply(item.id, item.authorName)}
                                          className='comment-reply-link'>Reply</span>
                                </div>
                                <div className='body'>
                                    <p>{item.parentUserName && <span>@{item.parentUserName}</span>}{item.content}</p>
                                </div>
                                <hr/>
                            </li>
                        )
                    })}
                </ul>
                <Pagination
                    className='pagination'
                    hideOnSinglePage
                    size="small"
                    onChange={(page) => this.getComments(id, page)}
                    itemRender={this.itemRender}
                    current={pageInfo.page} pageSize={5} total={pageInfo.total}
                />
                {isComment === 1 ? <CommentTextarea>
                    <textarea
                        placeholder="你是我一生只会遇见一次的惊喜 ..."
                        name="comment"
                        className="commentbody"
                        id="comment"
                        rows="5" tabIndex="4"
                        value={this.state.value}
                        onChange={this.setValue}
                    />
                    <div className='form-submit'>
                        <input
                            onClick={this.addComments}
                            name="submit"
                            type="submit"
                            id="submit"
                            className="submit"
                            value="BiuBiuBiu~"
                        />
                    </div>
                </CommentTextarea> : <p className='text'>此处评论已关闭</p>}
            </CommentsWrapper>
        )
    }

    componentDidMount() {
        this.getComments(this.props.id, 1);
    }

    reply(parentId, authorName) {
        this.setState({
            value: `@${authorName}：`,
            preContent: `@${authorName}：`,
            parentId: parentId
        });
    }

    itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <span>« Older</span>;
        }
        if (type === 'next') {
            return <span>Newer »</span>;
        }
        return originalElement;
    }

    setValue(e) {
        const value = e.target.value;
        this.setState((prevState) => {
            return {
                value: value,
                parentId: value ? prevState.parentId : '',
                preContent: value ? prevState.preContent : '',
            }
        });
    }

    addComments() {
        const {value, id, parentId, preContent} = this.state;
        const data = {content: value, postsId: id};
        if (value === '') {
            message.warning('please type a comment');
            return false
        }
        if (parentId) {
            let content = value.replace(preContent, "");
            if (content === '') {
                message.warning('please type a comment');
                return false
            }
            if (value.indexOf(preContent, 0) !== -1) {
                data["parentId"] = parentId;
                data["content"] = content;
            }
        }
        axios({
            method: 'post',
            url: '/comments/comments/v1/add',
            data: data
        }).then((res) => {
            if (res.success === 1) {
                message.success('评论成功');
                this.setState({
                    value: '',
                    parentId: ''
                });
                this.getComments(id, 1);
            } else {
                this.login();
            }
        });
    }

    login() {
        axios.get('/auth/github/v1/get').then((res) => {
            if (res.success === 1) {
                openWindow(res.model.authorizeUrl, "绑定GitHub", 540, 540);
                window.addEventListener("message", loginGithubHandel, false);
            }
        });
    }

    getComments(id, page) {
        axios.get('/comments/comments-posts/v1/list', {
            params: {
                page: page,
                size: 5,
                postsId: id
            }
        }).then((res) => {
            if (res.success === 1) {
                this.setState({
                    commentsList: res.models,
                    pageInfo: res.pageInfo
                })
            }
        });
    }
}

export default Comments;
