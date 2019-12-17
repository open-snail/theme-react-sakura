import React, {PureComponent} from "react";
import {connect} from 'react-redux';

class List extends PureComponent {
    render() {
        return (
            <div>list</div>
        )
    }
}

const mapState = (state) => {
    return {}
};

const mapDispatch = (dispatch) => {
    return {}
};
export default connect(mapState, mapDispatch())(List);
