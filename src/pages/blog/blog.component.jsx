import React from 'react'
import BlogPage from './blog-page/blog-page.component.jsx'
import ContentCard from '../../components/content-card/content-card.component.jsx'
import {Link} from 'react-router-dom'

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pages : ""        }
    }
    render (){
        return(
        <div id ="blog-list">
        {/*
        blogList = glob blog-src/*.md
        blogList.map((blogLink, idx) =>
            <Link classname='blog-link' to='/{blogLink}' key= {idx}>
            {blogLink}
            </Link>
        )
        */}
        <h1>This is the top of the Blog</h1>
        <p>
          glob the blogs
            blogList = glob blog-src/*.md
        </p>
        </div>
        )
    }
}

export default Blog