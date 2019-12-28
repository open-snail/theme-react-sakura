import React, {PureComponent} from "react";
import {connect} from "react-redux";
import axios from "axios";
import {SearchWrapper, MainWrapper} from './style';
import CatList from "../../components/List";
import PagInation from '../../components/PagInation';

class Search extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            key: props.match.params.key,
            finished: false,
            loading: true,
            page: 1,
            list: []
        };
        this.getList = this.getList.bind(this);
    }

    render() {
        const {list, page, finished, loading, key} = this.state;
        return (
            <SearchWrapper>
                <div className='pattern-center-blank'/>
                <MainWrapper>
                    <header className="page-header">
                        <h1 className="page-title">{`搜索结果：${key}`}</h1>
                    </header>
                    <CatList list={list}/>
                    <PagInation page={page} id={key} finished={finished} loading={loading} getList={this.getList}/>
                </MainWrapper>
            </SearchWrapper>
        )
    }

    componentDidMount() {
        this.getList(1, this.state.key, true);
    }

    getList(page, key, override) {
        this.setState({loading: true});
        axios.get('/posts/posts/v1/list', {
            params: {
                page: page,
                size: 10,
                keywords: key
            }
        }).then((res) => {
            if (res.success === 1) {
                let current = res.pageInfo.page * res.pageInfo.size;
                let total = res.pageInfo.total;
                const data = res.models;
                const Img = this.props.ListImg;
                let arr = [];
                data.forEach((item) => {
                    arr.push({
                        id: item.id,
                        title: item.title,
                        thumbnail: item.thumbnail || Img[this.getrand(0, Img.length - 1)].img,
                        comments: item.comments,
                        status: item.status,
                        summary: item.summary,
                        views: item.views,
                        createTime: item.createTime,
                        syncStatus: item.syncStatus,
                        author: item.author,
                        categoryName: item.categoryName
                    })
                });
                this.setState((prevState) => {
                    return {
                        list: override ? arr : [...prevState.list, ...arr],
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

    getrand(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    };
}

const mapState = (state) => {
    return {
        ListImg: state.getIn(['image', 'ListImg'])
    }
};

export default connect(mapState)(Search)
