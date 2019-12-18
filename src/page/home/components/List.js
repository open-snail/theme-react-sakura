import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {FeatureTitle, HomeList, BlogList} from "../style";
import {actionCreators} from "../store";

class List extends PureComponent {
    render() {
        return (
            <HomeList>
                <FeatureTitle>
                    <h1><i className='iconfont icon-envira'/><span> Discovery</span></h1>
                </FeatureTitle>
                {this.BlogList()}
            </HomeList>
        )
    }

    BlogList() {
        const {blogList} = this.props;
        const list = blogList.toJS();
        console.log(list);
        return (
            <BlogList>
                {list.map((item, index) => {
                    return (
                        <div className='blog-item' key={index}>
                            <div className='post-thumb'>
                                <Link to='/'>
                                    <img src={item.thumbnail ? item.thumbnail : this.thumbImg()} alt=""/>
                                </Link>
                            </div>
                            <div className='post-content-wrap'>

                            </div>
                        </div>
                    )
                })}
            </BlogList>
        )
    }

    thumbImg() {
        const {thumbList} = this.props;
        const list = thumbList.toJS();
        const num = this.getrand(0,list.length-1);
        return list[num].img
    }

    getrand(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    };

    componentDidMount() {
        this.props.getBlogList();
        this.props.randomThumb();
    }
}

const mapState = (state) => {
    return {
        blogList: state.getIn(['home', 'blogList']),
        thumbList: state.getIn(['home', 'thumbList']),
    }
};

const mapDispatch = (dispatch) => {
    return {
        getBlogList() {
            dispatch(actionCreators.getBlogList())
        },
        randomThumb() {
            dispatch(actionCreators.randomThumb())
        }
    }
};
export default connect(mapState, mapDispatch)(List);
