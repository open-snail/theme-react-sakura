import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';
import {ArticleWrapper, ArticleTop, MainWrapper} from './style';
import {getTime} from '../../lib/public';
import 'highlight.js/styles/atom-one-dark.css'
import {Spin} from 'antd';
import Tocify from './tocify';
import Comments from './components/Comments';
import axios from "axios";
import Carousel, {Modal, ModalGateway} from 'react-images';

class Article extends PureComponent {
    tocify = new Tocify();

    constructor(props) {
        super(props);
        this.state = {
            content: '',
            timg: '',
            id: props.match.params.id,
            socialsList: [],
            imgList: [],
            modalIsOpen: false,
            currentImage: 0
        }
    }

    render() {
        const {content, socialsList, id, timg, imgList, modalIsOpen, currentImage} = this.state;
        const {name, avatar} = this.props.userInfo.toJS();
        this.tocify && this.tocify.reset();
        if (content.title) document.title = content.title;
        const styleInit = {
            header: (base, state) => ({ //头部样式
                position: 'absolute',
                top: 90,
                right: 90,
                zIndex: 9999,
            }),
            view: (base, state) => ({
                textAlign: 'center',
                height: state.isFullscreen ? '100%' : 600  //当点击全屏的时候图片样式
            })
        };
        return (
            <ArticleWrapper>
                <div className='pattern-center-blank'/>
                <ArticleTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src={content && (content.thumbnail || timg)} alt=""/>
                    </div>
                    <div className='single-header'>
                        <h1 className='entry-title'>{content.title}</h1>
                        {content && <p className='entry-census'>
                            <span><img src={avatar} alt=""/></span>
                            <span>{name}</span>
                            <span className="bull">·</span>
                            <span>{getTime(content.createTime)}</span>
                            <span className="bull">·</span>
                            <span>{content.views} 次阅读</span></p>
                        }
                    </div>
                </ArticleTop>
                <MainWrapper>
                    {content ?
                        <div className='flex-items'>
                            <div className='cell'>
                                <div className='entry-content'
                                     id='content'
                                     dangerouslySetInnerHTML={{__html: marked(content.content)}}
                                />
                                {this.setSocials(socialsList)}
                                <Comments id={id} isComment={content.isComment}/>
                            </div>
                            {this.tocify && this.tocify.render()}
                        </div> : this.Spin()
                    }
                </MainWrapper>
                <ModalGateway>
                    {modalIsOpen ? (
                        <Modal onClose={this.toggleModal}>
                            <Carousel views={imgList} styles={styleInit} currentIndex={currentImage}/>
                        </Modal>
                    ) : null}
                </ModalGateway>
            </ArticleWrapper>
        )
    }


    componentDidMount() {
        const renderer = new marked.Renderer();
        renderer.heading = (text, level) => {
            const anchor = this.tocify.add(text, level);
            return `<h${level} id="${anchor}">${text}</h${level}>`;
        };
        marked.setOptions({
            renderer: renderer,
            highlight: code => hljs.highlightAuto(code).value
        });
        this.getDetail(this.props.match.params.id);
        this.getTimg();
        this.getSocials();
    }

    toggleModal = () => {
        this.setState({
            currentImage: 0,
            modalIsOpen: false
        })
    };

    // 打开图片预览
    openImg(index) {
        this.setState({
            currentImage: index,
            modalIsOpen: true
        })
    }

    getTimg() {
        const list = this.props.topImg;
        const num = this.getrand(0, list.length - 1);
        this.setState({
            timg: list[num].img
        })
    }

    getDetail(id) {
        axios.get('/posts/posts/v1/' + id).then((res) => {
            if (res.success === 1) {
                this.setState({
                    content: res.model
                }, () => {
                    const content = document.getElementById('content');
                    const img = content.getElementsByTagName('img');
                    let arr = [];
                    for (let i = 0; i < img.length; i++) {
                        const src = img[i].src;
                        arr.push({
                            source: src
                        });
                        img[i].onclick = () => {
                            this.openImg(i);
                        }
                    }
                    this.setState({
                        imgList: arr
                    })
                });

            } else {
                this.props.history.push('/404');
            }
        });
    }

    getSocials() {
        axios.get('/auth/social/v1/socials?code=reward').then((res) => {
            if (res.success === 1) {
                this.setState({
                    socialsList: res.models
                })
            }
        });
    }

    setSocials(socialsList) {
        if (socialsList.length > 0) {
            return (
                <div className='single-reward'>
                    <div className='reward-open'>
                        <p>赏</p>
                        <div className='reward-main'>
                            <ul className='reward-row'>
                                {socialsList.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <img src={item.content} alt=""/>
                                            <p>{item.remark}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    getrand(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }

    Spin() {
        return (
            <div className="example">
                <Spin size="large"/>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        topImg: state.getIn(['image', 'bannerList']),
        userInfo: state.getIn(['header', 'userInfo']),
    }
};

export default connect(mapState)(Article);
