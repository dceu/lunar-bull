import React from 'react'
import BlogPage from './blog-page/blog-page.component.jsx'
import ContentCard from '../../components/content-card/content-card.component.jsx'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import bloglist from '../../util/blog-list.json';
class Blog extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            pages : ""        }
    }
    
    componentDidMount(){
        this.setState({
            blogList : bloglist
        })
    }
    
    render (){
        const {blogList} = this.state;
        const blString = JSON.stringify(blogList);
       // make urls from list
       let urls = new Array();
      if (blogList) {urls.push(
          blogList.map(str => '/blog/' + str.slice(0, -3))
          ) }
       //blogList.map( (str, idx )=> {
        //  return urls[idx] = '/blog/' + str.slice(str.indexOf('.'));
       //})
        return(
        <div className ='container'>
        <div id ="blog-list">
        
        <h1>This is the top of the Blog</h1>
        <p>
          glob the blogs before build,<br/>
          make a json object that lists all the blogs,<br/>
          iterate over list to have markdown source to pass to blog-page<br/>
            blogList = glob blog-src/*.md
        <br/>
            blogList = {blString}
        </p>
        </div>
        <BrowserRouter>
        <div id= 'rolodex'>
            {
            console.log(blogList)
            }
            {
               console.log(urls) 
           } 
            
            
        </div>
        </BrowserRouter>
        </div>
        )
    }
}

export default Blog;