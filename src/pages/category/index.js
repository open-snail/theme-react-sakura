import React, {PureComponent} from "react";
import {CategoryArticleWrapper, ArticleTop, MainWrapper} from './style';
import {connect} from 'react-redux';
import axios from "axios";
import CatList from "../../components/List";
import PagInation from '../../components/PagInation';

class Category extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
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
                    <PagInation page={page} id={id} finished={finished} loading={loading} getList={this.getList}/>
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
                const data = res.models;
                const Img = this.props.ListImg;
                let arr = [];
                for (let i = 0; i < data.length; i++) {
                    arr.push({
                        id: data[i].id,
                        title: data[i].title,
                        thumbnail: data[i].thumbnail || Img[this.getrand(0, Img.length - 1)].img,
                        comments: data[i].comments,
                        status: data[i].status,
                        summary: data[i].summary,
                        views: data[i].views,
                        createTime: data[i].createTime,
                        syncStatus: data[i].syncStatus,
                        author: data[i].author,
                        categoryName: data[i].categoryName
                    })
                }
                this.setState((prevState) => {
                    return {
                        CategoryList: override ? arr : [...prevState.CategoryList, ...arr],
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
        const list = this.props.topImg;
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
        topImg: state.getIn(['image', 'topImg']),
        ListImg: state.getIn(['image', 'ListImg']),
    }
};

export default connect(mapState)(Category)
