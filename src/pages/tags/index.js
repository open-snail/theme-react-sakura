import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import axios from "axios";
import {Spin, Tag} from "antd";
import {TagsWrapper, TagsTop, MainWrapper} from './style';

const TagsList = (props) => {
    const {list, loading} = props;
    const color = ['#23b7e5', '#3a3f51', '#27c24c', '#1c2b36', '#fad733', '#7266ba', '#f05050'];
    if (loading) {
        return (
            <div className="example">
                <Spin size="large"/>
            </div>
        )
    } else {
        return (
            <div className='tags-list'>
                {list.length?list.map((item, index) => {
                    return (
                        <Tag color={color[getrand(0, color.length - 1)]} key={index}>
                            <Link to={'/tags/' + item.id}>{item.name}({item.postsTotal})</Link>
                        </Tag>
                    )
                }):<p>你暂时还未添加标签...</p>}
            </div>
        )
    }
};

const getrand = (m, n) => {
    return Math.floor(Math.random() * (n - m + 1)) + m;
};

class Tags extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            timg: '',
            list: [],
            loading: true
        }
    }

    render() {
        const {timg, list, loading} = this.state;
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
                    <TagsList list={list} loading={loading}/>
                </MainWrapper>
            </TagsWrapper>
        )
    }

    componentDidMount() {
        this.getTags();
        this.getTimg();
    }

    getTags() {
        this.setState({loading: true});
        axios.get('/tags/tags-article-quantity/v1/list').then((res) => {
            if (res.success === 1) {
                this.setState({
                    list: res.models,
                    loading: false
                })
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
        topImg: state.getIn(['image', 'topImg'])
    }
};

export default connect(mapState)(Tags)
