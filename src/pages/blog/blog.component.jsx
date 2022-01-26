import React from 'react'
import BlogPage from './blog-page/blog-page.component.jsx'
import ContentCard from '../../components/content-card/content-card.component.jsx'
import {Link, Route, BrowserRouter, Switch
} from 'react-router-dom'
import bloglist from '../../blog-src/blog-list.json';
class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pages: bloglist
            }
    }
    componentDidMount(){
        const blString = JSON.stringify(this.state.blogList);
    }
    render (){
        const {pages} = this.state;
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
        </p>
        </div>
        <BrowserRouter>
           <Switch>
            {   
                pages.map((page, idx) => (
               <Route exact path={`/blog/${page.fileName}`} >
                <BlogPage mdSource = {page.fileName}/> 
               </Route>
                
                ))
            }
            </Switch>
            <div id="rolodex">
            {
                pages.map((page, idx) => (
                <Link to={`/blog/${page.fileName}`} key = {idx}>{page.title}</Link>
                ))
            }
            </div>
        </BrowserRouter>
            
        </div>
        )
    }
}

export default Blog;