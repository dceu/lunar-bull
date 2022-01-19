import React from 'react'
import BlogPage from './blog-page/blog-page.component.jsx'
import ContentCard from '../../components/content-card/content-card.component.jsx'
import {Link} from 'react-router-dom'

class Blog extends Component{
    constructor(props){
        super(props);
        this.state = {
            pages : ""        }
    }
    render (){
        <div id ="blog-list">
        {/*
        blogList = glob blog-src/*.md
        blogList.map((blogLink, idx) =>
            <Link classname='blog-link' to='/{blogLink}' key= {idx}>
            {blogLink}
            </Link>
        )
        */}
        </div>
    }
}

export default Blog