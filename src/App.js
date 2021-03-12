import logo from './logo.svg';
import './App.scss';
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component.jsx';
import Resume from './pages/resume/resume.component.jsx';
import Bio from './pages/bio/bio.component.jsx';
import Blog from './pages/blog/blog.component.jsx';
import Contact from './pages/contact/contact.component.jsx';
import Projects from './pages/projects/projects.components.jsx';
import Header from './components/header/header.component';
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div> 
        <Header />
        
        <div className = 'content-container'>
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route path = '/resume' component = {Resume} />
          <Route path = '/projects' component = {Projects} />
          <Route path = '/blog' component = {Blog} />
          <Route path = '/bio' component = {Bio} />
          <Route path = '/contact' component ={Contact} />
        </Switch>
        </div>
          
        
      </div>
    );
  }
}

export default App;
