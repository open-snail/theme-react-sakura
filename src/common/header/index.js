import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {NavWrapper, NavLeft, NavRight, Nav, NavItem, IconBox} from './style';
import {actionCreators} from './store';
import {Icon, Menu, Dropdown} from 'antd';

class Header extends Component {

    componentDidMount() {
        this.props.getCategory();
    }

    render() {
        return (
            <NavWrapper>
                <NavLeft className='ellipsis'>
                    <a href="http://www.bygit.cn/#/">皮皮轩の小屋</a>
                </NavLeft>
                <NavRight>
                    <div className='flex-items'>
                        <Nav className='flex-items'>
                            <NavItem><Link to={'/index'} className='nav-item'>首页</Link></NavItem>
                            <NavItem id='area'>
                                <Dropdown
                                    overlay={this.Category()}
                                    placement="bottomCenter"
                                    getPopupContainer={() => document.getElementById('area')}
                                    overlayClassName='NavDropdown'
                                >
                                    <Link to={'/'} className='nav-item'>分类</Link>
                                </Dropdown>
                            </NavItem>
                            <NavItem><Link to={'/'} className='nav-item'>归档</Link></NavItem>
                            <NavItem><Link to={'/'} className='nav-item'>留言板</Link></NavItem>
                        </Nav>
                        <IconBox className='flex-items'>
                            <Icon type="search"/>
                            <Icon type="user"/>
                        </IconBox>
                    </div>
                </NavRight>
            </NavWrapper>
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
