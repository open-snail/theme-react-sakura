import styled from "styled-components";

export const BlogList = styled.div`
    width: 100%;
    .blog-item{
        width: 100%;
        height: 300px;
        position: relative;
        margin: 30px 0;
        border-radius: 10px;
        background-color: rgba(255,255,255,0);
        box-shadow: 0 1px 20px -6px rgba(0,0,0,.5);
        opacity: 0;
        transition: box-shadow .3s ease;
        &:hover{
            box-shadow: 0 5px 10px 5px rgba(110,110,110,.4);
        }
        &:hover img{
            transform: scale(1.1);
        }
        .post-thumb {
            float: right;
            width: 55%;
            a{
                height: 300px;
                position: relative;
                display: block;
                background-repeat: no-repeat;
                background-size: cover;
                overflow: hidden;
                border-radius: 0 10px 10px 0;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    pointer-events: none;
                    transition: all .6s;
                    filter: blur(0px);
                }
            }
        }
    }
    
    .post-content-wrap {
        position: relative;
        display: inline-block;
        float: right;
        padding-right: 30px;
        padding-left: 0;
        width: 40%;
        margin: 30px 10px 0;
        .post-date, .post-meta, .post-meta a {
            color: #888;
            font-size: 14px;
        }
        i {
            margin-right: 5px;
            color: #989898;
            font-size: 14px;
        }
        .post-title{
            display:block;
            margin:18px 0;
            h3 {
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                word-wrap: break-word;
                font-size: 16px;
                font-weight: bold;
                color: #504e4e;
                line-height:20px;
                transition: color .2s ease-out,border .2s ease-out,opacity .2s ease-out;
            }
            &:hover h3{
                color: #FE9600;
            }
        } 
        .comments-number{
            margin: 0 10px;
        }
        .float-content {
            position: relative;
            width: 100%;
            right: 0;
            margin: 0;
            padding: 0;
            z-index: 50;
            color: rgba(0,0,0,.66);
            p{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                height: 69px;
                overflow: hidden;
                margin:16px 0 22px 0;
                font-size: 15px;
                color: rgba(0,0,0,.66);
                line-height:23px;
            }
            i {
                font-size: 25px;
                color: #666;
                &:hover{
                    color: #FE9600;
                }
            }
        }
    }
    .right{
        .post-thumb {
            float: left;
            a {
                border-radius: 10px 0 0 10px;
            }
        }
        .post-content-wrap {
            float: left;
            padding-left: 30px;
            padding-right: 0;
            text-align: right;
            margin: 30px 10px 10px 0;
        }
    }
    .post-list-show {
        animation: post-list-show .5s;
        -webkit-animation: post-list-show .5s;
        opacity: 1;
    }
    @keyframes post-list-show {
        0% {
            opacity: 0;
            -webkit-transform: translateY(80px);
            transform: translateY(80px)
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }
    }
`;
