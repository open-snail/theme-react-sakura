import React, {PureComponent} from "react";
import {MainWrapper, TagsTop, TagsWrapper} from "./style";
import axios from "axios";
import {connect} from "react-redux";
import CatList from "../../components/List";
import PagInation from '../../components/PagInation';

const getrand = (m, n) => {
    return Math.floor(Math.random() * (n - m + 1)) + m;
};

class TagList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            timg: '',
            finished: false,
            loading: true,
            page: 1,
            list: []
        };
        this.getList = this.getList.bind(this);
    }

    render() {
        const {timg, list, page, finished, loading, id} = this.state;
        return (
            <TagsWrapper>
                <div className='pattern-center-blank'/>
                <TagsTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src={timg} alt=""/>
                    </div>
                    <div className='pattern-header '>
                        <h1>标签墙</h1>
                    </div>
                </TagsTop>
                <MainWrapper>
                    <CatList list={list}/>
                    <PagInation page={page} id={id} finished={finished} loading={loading} getList={this.getList}/>
                </MainWrapper>
            </TagsWrapper>
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
                postsTagsId: id
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
                        thumbnail: item.thumbnail || Img[getrand(0, Img.length - 1)].img,
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

    getTimg() {
        const list = this.props.topImg;
        const num = getrand(0, list.length - 1);
        this.setState({timg: list[num].img});
    }
}

const mapState = (state) => {
    return {
        topImg: state.getIn(['image', 'topImg']),
        ListImg: state.getIn(['image', 'ListImg']),
    }
};

export default connect(mapState)(TagList)
