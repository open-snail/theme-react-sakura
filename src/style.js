import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ::selection {
        background: #A0DAD0;
        color: #fff;
    }
    ::-webkit-scrollbar-track {
        background-color: #ffffff;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #FE9600;
    }
    ::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        background-color: #B9B9B9;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Serif SC','Source Han Serif SC','Source Han Serif','source-han-serif-sc','PT Serif','SongTi SC','MicroSoft Yahei',Georgia,serif;
        cursor: url(${require('./statics/images/normal.cur')}),auto
    }
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, 
	a, abbr, acronym, address, big, cite, 
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	.transition-color{
	    transition: color .2s ease-out,border .2s ease-out,opacity .2s ease-out;
	}
	a{
        transition: color .2s ease-out,border .2s ease-out,opacity .2s ease-out;
        cursor: url(${require('./statics/images/ayuda.cur')}),auto;
	}
	a:hover{
	    text-decoration: none;
	}
	ol, ul {
		list-style: none;
	}
	ul,li{
	    margin:0;
	}
	.lazyload {
        filter: blur(0px);
        transition: .3s filter linear,.3s -webkit-filter linear;
    }
    p{
        cursor: url(${require('./statics/images/texto.cur')}),auto;
    }
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	
	.flex-items {
        display: -webkit-flex; /* Safari */
        -webkit-align-items: center; /* Safari 7.0+ */
        display: flex;
        align-items: center;
    }
    
    .flex-start {
        display: -webkit-flex; /* Safari */
        -webkit-align-items: center; /* Safari 7.0+ */
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .cell {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 0;
    }
    
    .align-center {
        -webkit-align-self: center;
        align-self: center;
    }
    
    .ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    
    .ellipsis-two {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    #player .aplayer-lrc-current {
        color: #fe9600;
        font-size: 15px;
        font-weight: bold;
    }
    #fireworks{
        position: fixed; 
        left: 0px; 
        top: 0px; 
        pointer-events: none; 
        z-index: 999;
    }
`;
