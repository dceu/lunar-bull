import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component.jsx';
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div> 
        <div>header</div>
        
        <Switch>
          <Route exact path='/' component = {HomePage} />
        </Switch>
          
        
      </div>
    );
  }
}

export default App;
