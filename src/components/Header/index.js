import React, {PureComponent} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Headers, NavWrapper, NavLeft, NavRight, Nav, NavItem, IconBox} from './style';
import {actionCreators} from './store';
import {Icon, Menu, Dropdown, Affix, message} from 'antd';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            value: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.keypress = this.keypress.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    render() {
        const {isVisible, value} = this.state;
        const {title, domain} = this.props.confing.toJS();
        if (title) document.title = title;
        return (
            <Headers>
                <Affix>
                    <NavWrapper className='nav-wrapper'>
                        <NavLeft className='ellipsis'>
                            <a href={domain}>{title}</a>
                            <Icon type="menu"/>
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
                                            <span className='nav-item'>
                                                <i className='iconfont icon-list-ul'/>
                                                <span>分类</span>
                                            </span>
                                        </Dropdown>
                                    </NavItem>
                                    <NavItem>
                                        <Link to={'/archives'} className='nav-item'>
                                            <i className='iconfont icon-archive'/>
                                            <span>归档</span>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to={'/links'} className='nav-item'>
                                            <i className='iconfont icon-link'/>
                                            <span>友人帐</span>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to={'/tags'} className='nav-item'>
                                            <i className='iconfont icon-tag'/>
                                            <span>标签墙</span>
                                        </Link>
                                    </NavItem>
                                </Nav>
                                <IconBox className='flex-items'>
                                    <Icon type="search" onClick={this.handleClick}/>
                                    <Icon type="user"/>
                                </IconBox>
                            </div>
                        </NavRight>
                    </NavWrapper>
                </Affix>
                <div
                    className={isVisible ? 'search-form search-form--modal is-visible' : 'search-form search-form--modal'}>
                    <div className='search-form__inner'>
                        <div className='box'>
                            <p className="micro mb-">想要找点什么呢？</p>
                            <Icon type="search"/>
                            <input
                                type="search"
                                name="s"
                                placeholder="Search"
                                onKeyPress={this.keypress}
                                value={value}
                                onChange={this.setValue}
                            />
                        </div>
                    </div>
                    <div className="search_close" onClick={this.handleClick}/>
                </div>
            </Headers>
        )
    }

    componentDidMount() {
        this.props.getCategory();
        this.props.getUser();
        this.props.getConfing();
    }

    keypress(e) {
        if (e.which === 13) {
            const {value} = this.state;
            if (value === '') {
                message.warning('please type a comment');
            } else {
                this.props.history.push('/search/' + value);
                this.handleClick();
            }
        }
    }

    setValue(e) {
        const value = e.target.value;
        this.setState({value: value});
    }

    handleClick() {
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible
        }))
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
                                <Link to={'/category/' + item.id}>{item.name}</Link>
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
        confing: state.getIn(['header', 'confing']),
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getCategory() {
            dispatch(actionCreators.getCategory());
        },
        getUser() {
            dispatch(actionCreators.getUser());
        },
        getConfing() {
            dispatch(actionCreators.getConfing());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
