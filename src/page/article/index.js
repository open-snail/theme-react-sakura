import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';
import {ArticleWrapper, ArticleTop, MainWrapper} from './style';
import {actionCreators} from './store';
import {getTime} from '../../lib/public';
import 'highlight.js/styles/atom-one-dark.css'

class Article extends PureComponent {
    render() {
        const {content} = this.props;
        marked.setOptions({
            highlight: code => hljs.highlightAuto(code).value,
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });
        return (
            <ArticleWrapper>
                <div className='pattern-center-blank'/>
                <ArticleTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src={require('../../statics/images/list_01.jpg')} alt=""/>
                    </div>
                    <div className='single-header'>
                        <h1 className='entry-title'>{content.title}</h1>
                        <p className='entry-census'>
                            <span>by05021</span>
                            <span className="bull">·</span>
                            <span>{getTime(content.createTime)}</span>
                            <span className="bull">·</span>
                            <span>{content.views} 次阅读</span>
                        </p>
                    </div>
                </ArticleTop>
                <MainWrapper>
                    {
                        content ? <div className='entry-content' dangerouslySetInnerHTML={{__html: marked(content.content)}}/> : null
                    }
                </MainWrapper>
            </ArticleWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => {
    return {
        content: state.getIn(['article', 'content'])
    }
};

const mapDispatch = (dispatch) => {
    return {
        getDetail(id) {
            dispatch(actionCreators.getDetail(id));
        }
    }
};

export default connect(mapState, mapDispatch)(Article);
