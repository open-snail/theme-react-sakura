import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Headers, NavWrapper, NavLeft, NavRight, Nav, NavItem, IconBox} from './style';
import {actionCreators} from './store';
import {Icon, Menu, Dropdown, Affix} from 'antd';

class Header extends Component {

    componentDidMount() {
        this.props.getCategory();
    }

    render() {
        return (
            <Headers>
                <Affix>
                    <NavWrapper className='nav-wrapper'>
                        <NavLeft className='ellipsis'>
                            <a href="http://www.bygit.cn/#/">皮皮轩の小屋</a>
                        </NavLeft>
                        <NavRight>
                            <div className='flex-items'>
                                <Nav className='flex-items'>
                                    <NavItem>
                                        <Link to={'/'} className='nav-item'>
                                            <i className='iconfont icon-fort-awesome'/>
                                            <span>首页</span>
                                        </Link>
                                    </NavItem>
                                    <NavItem id='area'>
                                        <Dropdown
                                            overlay={this.Category()}
                                            placement="bottomCenter"
                                            getPopupContainer={() => document.getElementById('area')}
                                            overlayClassName='NavDropdown'
                                        >
                                            <Link to={'/'} className='nav-item'>
                                                <i className='iconfont icon-list-ul'/>
                                                <span>分类</span>
                                            </Link>
                                        </Dropdown>
                                    </NavItem>
                                    <NavItem>
                                        <Link to={'/'} className='nav-item'>
                                            <i className='iconfont icon-archive'/>
                                            <span>归档</span>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to={'/'} className='nav-item'>
                                            <i className='iconfont icon-pencil-square-o'/>
                                            <span>留言板</span>
                                        </Link>
                                    </NavItem>
                                </Nav>
                                <IconBox className='flex-items'>
                                    <Icon type="search"/>
                                    <Icon type="user"/>
                                </IconBox>
                            </div>
                        </NavRight>
                    </NavWrapper>
                </Affix>
            </Headers>
        )
    }

    Category() {
        const {category} = this.props;
        const list = category.toJS();
        return (
            <Menu>
                {
                    list.map((item, index) => {
                        return (
                            <Menu.Item key={index}>
                                <Link to={'/'}>{item.name}</Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        category: state.getIn(['header', 'category']),
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getCategory() {
            dispatch(actionCreators.getCategory());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
