import React, {PureComponent} from "react";
import {CategoryArticleWrapper, ArticleTop, MainWrapper, SiteMain, PagInation} from './style';
import {connect} from 'react-redux';
import axios from "axios";
import {Link} from 'react-router-dom';
import {getTime} from '../../lib/public';
import {Spin} from "antd";

const Previous = (props) => {
    const {page, finished, loading, id} = props;
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
                <div onClick={() => props.getList(page, id)} className='btn'>Previous</div>
            )
        }
    }
};

const CatList = (props) => {
    let {list} = props;
    return (
        <SiteMain>
            {list.map((item, index) => {
                return (
                    <article className='post post-list' key={index}>
                        <div className='post-entry'>
                            <div className='feature'>
                                <Link to={'/article/' + item.id}>
                                    <img src="http://image.bygit.cn/FnwJ3Weg4EPWBMZOkWeXYEQrB5ms" alt=""/>
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


class Category extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            timglist: [
                {img: 'http://image.bygit.cn/timg-1.png'},
                {img: 'http://image.bygit.cn/timg-2.png'},
                {img: 'http://image.bygit.cn/timg-3.png'},
                {img: 'http://image.bygit.cn/timg-4.png'}
            ],
            timg: '',
            id: props.match.params.id,
            finished: false,
            loading: true,
            page: 1,
            CategoryList: []
        };
        this.getList = this.getList.bind(this);
    }

    render() {
        const {category} = this.props;
        const {CategoryList, page, finished, loading, id} = this.state;
        return (
            <CategoryArticleWrapper>
                <div className='pattern-center-blank'/>
                <ArticleTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src={this.state.timg} alt=""/>
                    </div>
                    <div className='pattern-header '>
                        <h1>{this.setCategory(category)}</h1>
                    </div>
                </ArticleTop>
                <MainWrapper>
                    <header className="page-header">
                        <h1 className="page-title">{`分类 “${this.setCategory(category)}” 下的文章`}</h1>
                    </header>
                    <CatList list={CategoryList}/>
                    <PagInation>
                        <Previous page={page} id={id} finished={finished} loading={loading} getList={this.getList}/>
                    </PagInation>
                </MainWrapper>
            </CategoryArticleWrapper>
        )
    }

    componentDidMount() {
        this.getList(1, this.state.id, true);
        this.getTimg();
    }

    getList(page, id, override) {
        this.setState({loading: true});
        axios.get('/posts/posts/v1/list', {
            params: {
                page: page,
                size: 10,
                categoryId: id
            }
        }).then((res) => {
            if (res.success === 1) {
                let current = res.pageInfo.page * res.pageInfo.size;
                let total = res.pageInfo.total;
                let data = res.models;
                this.setState((prevState) => {
                    return {
                        CategoryList: override ? data : [...prevState.CategoryList, ...data],
                        page: page + 1,
                        loading: false
                    }
                });
                if (current > total) {
                    this.setState({
                        finished: true
                    })
                }
            }
        });
    }

    getTimg() {
        const list = this.state.timglist;
        const num = this.getrand(0, list.length - 1);
        this.setState({timg: list[num].img})
    }

    getrand(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }

    setCategory(category) {
        const id = parseFloat(this.props.match.params.id);
        let Text = '';
        const list = category.toJS();
        list.forEach((item) => {
            if (!Text && item.id === id) {
                Text = item.name;
            }
        });
        return Text;
    }
}

const mapState = (state) => {
    return {
        category: state.getIn(['header', 'category']),
    }
};

export default connect(mapState)(Category)
