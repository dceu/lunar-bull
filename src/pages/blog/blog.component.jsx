import React from 'react'
import BlogPage from './blog-page/blog-page.component.jsx'
import ContentCard from '../../components/content-card/content-card.component.jsx'
import {Link, Route, BrowserRouter, Switch, Router, withRouter
} from 'react-router-dom'
import bloglist from '../../blog-src/blog-list.json';
import Drawer from '../../components/drawer/drawer.component.jsx'
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
            
            <BrowserRouter>
            <Drawer pages={pages} children=
               {
                   pages.map((page, idx) => (
                   <Link to={`/blog/${page.fileName}`} key = {idx}>{page.title}</Link>
                   ))
               } 
               />
              
               {   
                   pages.map((page, idx) => (
                  <Route path={`/blog/${page.fileName}`} >
                   <BlogPage mdSource = {page.fileName}/> 
                  </Route>
                   
                   ))
               }
               
               <div id="rolodex">
               </div>
            </BrowserRouter>
        </div>
        )
    }
}

export default withRouter(Blog);