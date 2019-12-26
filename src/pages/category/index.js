import React, {PureComponent} from "react";
import {CategoryArticleWrapper, ArticleTop, MainWrapper} from './style';
import {connect} from 'react-redux';

class Category extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            timg: ''
        }
    }

    render() {
        const {category} = this.props;
        return (
            <CategoryArticleWrapper>
                <div className='pattern-center-blank'/>
                <ArticleTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src={this.state.timg} alt=""/>
                    </div>
                    <div className='pattern-header '>
                        <h1>{this.setCategory(category)}</h1>
                    </div>
                </ArticleTop>
                <MainWrapper>
                    <header className="page-header">
                        <h1 className="page-title">{`分类 “${this.setCategory(category)}” 下的文章`}</h1>
                    </header>
                </MainWrapper>
            </CategoryArticleWrapper>
        )
    }

    componentDidMount() {
        this.getTimg();
    }

    getTimg() {
        const list = this.props.timg.toJS();
        const num = this.getrand(0, list.length - 1);
        this.setState({
            timg: list[num].img
        })
    }

    getrand(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }

    setCategory(category) {
        const id = parseFloat(this.props.match.params.id);
        let Text = '';
        const list = category.toJS();
        list.forEach((item) => {
            if (!Text && item.id === id) {
                Text = item.name;
            }
        });
        return Text;
    }
}

const mapState = (state) => {
    return {
        category: state.getIn(['header', 'category']),
        timg: state.getIn(['article', 'timg'])
    }
};

const mapDispatch = (dispatch) => {
    return {
        getList() {

        }
    }
};

export default connect(mapState, mapDispatch)(Category)
