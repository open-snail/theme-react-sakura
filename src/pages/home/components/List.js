import React from "react";
import {connect} from 'react-redux';
import {FeatureTitle, HomeList, PagInation} from "../style";
import {Spin} from 'antd';
import {actionCreators} from "../store";
import List from '../../../components/List';

const pagInation = (props) => {
    const {page, finished, loading} = props;
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
                <div onClick={() => props.getBlogList(page)} className='btn'>Previous</div>
            )
        }
    }
};

const IndexList = (props) => {
    return (
        <HomeList>
            <FeatureTitle>
                <h1><i className='iconfont icon-envira'/><span> Discovery</span></h1>
            </FeatureTitle>
            <List blogList={props.blogList}/>
            <PagInation>
                {pagInation(props)}
            </PagInation>
        </HomeList>
    )
};

const mapState = (state) => {
    return {
        blogList: state.getIn(['home', 'blogList']),
        page: state.getIn(['home', 'articlePage']),
        finished: state.getIn(['home', 'finished']),
        loading: state.getIn(['home', 'loading'])
    }
};

const mapDispatch = (dispatch) => {
    return {
        getBlogList(page, override) {
            dispatch(actionCreators.getBlogList(page, override))
        },
    }
};

export default connect(mapState, mapDispatch)(IndexList);
