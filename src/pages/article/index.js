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

class Article extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            timg: '',
            id: props.match.params.id,
            tocify: new Tocify()
        }
    }

    render() {
        const {content} = this.state;
        const {name, avatar} = this.props.userInfo.toJS();
        this.state.tocify && this.state.tocify.reset();
        if (content.title) document.title = content.title;
        return (
            <ArticleWrapper>
                <div className='pattern-center-blank'/>
                <ArticleTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src={content && (content.thumbnail || this.state.timg)} alt=""/>
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
                                     dangerouslySetInnerHTML={{__html: marked(content.content)}}
                                />
                                <Comments id={this.state.id} isComment={content.isComment}/>
                            </div>
                            {this.state.tocify && this.state.tocify.render()}
                        </div> : this.Spin()
                    }
                </MainWrapper>
            </ArticleWrapper>
        )
    }


    componentDidMount() {
        const renderer = new marked.Renderer();
        renderer.heading = (text, level) => {
            const anchor = this.state.tocify.add(text, level);
            return `<h${level} id="${anchor}">${text}</h${level}>`;
        };
        marked.setOptions({
            renderer: renderer,
            highlight: code => hljs.highlightAuto(code).value
        });
        this.getDetail(this.state.id);
        this.getTimg();
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
                })
            }else {
                this.props.history.push('/404');
            }
        });
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
        topImg: state.getIn(['image', 'topImg']),
        userInfo: state.getIn(['header', 'userInfo']),
    }
};

export default connect(mapState)(Article);
