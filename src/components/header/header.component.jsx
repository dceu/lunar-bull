import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Directory from '../directory/directory.component'
import './header.styles.scss'
import {Breakpoint} from 'react-socks'

const Header = () => {
   let [isToggled, setToggled] = useState('false'); 
   const handleToggle = ()=> {
       console.log('Toggle: ' + isToggled);
       setToggled(!isToggled);
       this.forceUpdate();
   }
    return (
    <div className = 'header'>
    <div className= 'header-top'>
        <div className = 'logo'>
            <Link className='home' to='/home'></Link>
            {/* <div className='heaven-utf'>&#9776;</div> */}
        </div>
        <div className ='hamburger' onClick={handleToggle}>
            <div className={`bar1 ${isToggled ? "change" : "null"}`}></div> 
            <div className={`bar2 ${isToggled ? "change" : "null"}`}></div>
            <div className={`bar3 ${isToggled ? "change" : "null"}`}></div>  
        </div>
        </div>
        
        <Directory viewable={isToggled}/>
       

    </div>

)
}
export default Header