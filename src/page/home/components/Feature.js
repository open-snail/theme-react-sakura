import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {FeatureWrapper, FeatureTitle} from '../style';
import {actionCreators} from '../store';

class Feature extends PureComponent {
    render() {
        return (
            <FeatureWrapper>
                <FeatureTitle>
                    <h1><i className='iconfont icon-anchor'/><span> START:DASH!!</span></h1>
                </FeatureTitle>
                {this.featureList()}
            </FeatureWrapper>
        )
    }

    componentDidMount() {
        this.props.getFeature();
    }

    featureList() {
        const {featureList} = this.props;
        const list = featureList.toJS();
        return (
            <div className='top-feature-row row'>
                {
                    list.map((item, index) => {
                        return (
                            <div className="col-md-12 col-lg-4" key={index}>
                                <div className='top-feature-item'>
                                    <Link to='/'>
                                        <div className='img-box'>
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className='info'>
                                            <h3>{item.title}</h3>
                                            <p>{item.info}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        featureList: state.getIn(['home', 'featureList']),
    }
};

const mapDispatch = (dispatch) => {
    return {
        getFeature() {
            dispatch(actionCreators.getFeature());
        }
    }
};
export default connect(mapState, mapDispatch)(Feature);
