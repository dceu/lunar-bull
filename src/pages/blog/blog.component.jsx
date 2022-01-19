import React from 'react'
import BlogPage from './blog-page/blog-page.component.jsx'
import ContentCard from '../../components/content-card/content-card.component.jsx'
import {Link} from 'react-router-dom'
import blogglob from '../../util/blogglob.js'

class Blog extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            pages : ""        }
    }
    
    componentDidMount(){
        this.setState({
            blogList : blogglob("../")
        })
    }
    
    render (){
        const {blogList} = this.state;
        const blString = blogList.toString();
        
        return(
        
        <div id ="blog-list">
        
        <h1>This is the top of the Blog</h1>
        <p>
          glob the blogs
            blogList = glob blog-src/*.md
            
            blogList = {blString}
        </p>
        </div>
        )
    }
}

export default Blog;