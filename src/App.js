import logo from './logo.svg';
import './App.scss';
import './Typography.scss'

import React from 'react'
import {Route, Switch} from 'react-router-dom'

// Pages (as components)
import HomePage from './pages/homepage/homepage.component.jsx';
import Resume from './pages/resume/resume.component.jsx';
import Bio from './pages/bio/bio.component.jsx';
import Blog from './pages/blog/blog.component.jsx';
import Contact from './pages/contact/contact.component.jsx';
import Projects from './pages/projects/projects.components.jsx'; // remove
import Portfolio from './pages/portfolio/portfolio.components.jsx';
import NotFound from './pages/not-found/not-found.component.jsx';

// Components
import Header from './components/header/header.component';
import { Breakpoint } from 'react-socks';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="app-container"> 
    
      
        
        {/* <Header /> */}
        <Breakpoint small up>
          
          <Header />
          
         
        </Breakpoint>
        <Breakpoint medium up>
        <div className="page-container">
        <Switch>
          <Route exact path='/' component = {HomePage} />
          {/* <Route path = '/resume' component = {Resume} />  */}
          {/* <Route path = '/projects' component = {Projects} /> to be deleted */}
          {/* <Route path = '/portfolio' component = {Portfolio} /> */}
          <Route path = '/blog' component = {Blog} /> 
          {/* <Route path = '/bio' component = {Bio} />  */}
          <Route path = '/contact' component ={Contact} />
          <Route component = {NotFound}/>
        </Switch> 
        </div>
        </Breakpoint>
        
       
        
       
        
        
        
          
        
      </div>
    );
  }
}

export default App;
