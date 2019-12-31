import React, {PureComponent} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Headers, NavWrapper, NavLeft, NavRight, Nav, NavItem, IconBox, MoNav, Mask} from './style';
import {actionCreators} from './store';
import {Icon, Menu, Dropdown, Affix, message} from 'antd';
import {getAvatar, setAvatar, setToken} from '../../lib/auth';
import axios from "axios";
import openWindow from "../../lib/openWindow";

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            value: '',
            open: false,
            isUser: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.keypress = this.keypress.bind(this);
        this.setValue = this.setValue.bind(this);
        this.openMonav = this.openMonav.bind(this);
        this.login = this.login.bind(this);
        this.loginGithubHandel = this.loginGithubHandel.bind(this);
    }

    render() {
        const {isVisible, value, open, isUser} = this.state;
        const {category} = this.props;
        const {title, domain} = this.props.confing.toJS();
        const {name, introduction, avatar} = this.props.userInfo.toJS();
        if (title) document.title = title;
        return (
            <Headers>
                <Affix>
                    <NavWrapper className='nav-wrapper'>
                        <NavLeft className='ellipsis'>
                            <a href={domain}>{title}</a>
                            <Icon type="menu" onClick={this.openMonav}/>
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
                                    {isUser || getAvatar()? <img src={getAvatar()} alt=""/> :
                                        <Icon type="user" onClick={this.login}/>}
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
                <Mask className={open ? 'show' : 'hidden'} onClick={this.openMonav}/>
                <MoNav className={open ? 'mo-nav open' : 'mo-nav'}>
                    <div className='m-avatar'><img src={avatar} alt=""/></div>
                    <p className='name ellipsis'>{name}</p>
                    <p className='info ellipsis'>{introduction}</p>
                    <ul className='menu'>
                        <li>
                            <Link to={'/'} className='item flex-items' onClick={this.openMonav}>
                                <i className='iconfont icon-fort-awesome'/>
                                <span>首页</span>
                            </Link>
                        </li>
                        <li>
                            <span className='item flex-items'>
                                <i className='iconfont icon-list-ul'/>
                                <span>分类</span>
                            </span>
                            <ul className='sub-menu'>
                                {category.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={'/category/' + item.get('id')} className='item flex-items'
                                                  onClick={this.openMonav}>
                                                <span>{item.get('name')}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li>
                            <Link to={'/archives'} className='item flex-items' onClick={this.openMonav}>
                                <i className='iconfont icon-archive'/>
                                <span>归档</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/links'} className='item flex-items' onClick={this.openMonav}>
                                <i className='iconfont icon-link'/>
                                <span>友人帐</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/tags'} className='item flex-items' onClick={this.openMonav}>
                                <i className='iconfont icon-tag'/>
                                <span>标签墙</span>
                            </Link>
                        </li>
                    </ul>
                </MoNav>
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

    login() {
        axios.get('/auth/github/v1/get').then((res) => {
            if (res.success === 1) {
                openWindow(res.model.authorizeUrl, "绑定GitHub", 540, 540);
                window.addEventListener("message", this.loginGithubHandel, false);
            }
        });
    }

    loginGithubHandel(e) {
        const {socialId, avatar, name, htmlUrl} = e.data;
        if (socialId) {
            axios({
                method: 'post',
                url: '/auth/user/v1/login',
                data: {
                    socialId: socialId,
                    avatar: avatar,
                    name: name,
                    htmlUrl: htmlUrl
                }
            }).then((res) => {
                if (res.success === 1) {
                    setToken(res.model.token);
                    setAvatar(res.model.avatar);
                    this.setState({isUser: true});
                    message.success('登录成功');
                }
            });
            window.removeEventListener("message", this.loginGithubHandel, false);
        }
    }

    setValue(e) {
        const value = e.target.value;
        this.setState({value: value});
    }

    openMonav() {
        this.setState((prevState) => ({
            open: !prevState.open
        }))
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
        userInfo: state.getIn(['header', 'userInfo']),
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
