import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Directory from '../directory/directory.component'
import './header.styles.scss'
import {Breakpoint} from 'react-socks'

const Header = () => {
   let [dirOpen, setDirOpen] = useState(false); 
   let [isChange, setChange] = useState(false);
   const handleChange = () => {
       console.log(`isChange ? : ${isChange}`);
       setChange(prev => !prev);
   }
   const handleToggle = ()=> {
       console.log('dirOpen ? :' + dirOpen);
       handleChange();
       setDirOpen(prev => !prev);
   }
   
   const renderDir = () => {
       return (<Directory />)
   }
    return (
    <div className = 'header'>
    <div className= 'header-top'>
        <div className = 'logo'>
            <Link className='home' to='/home'></Link>
            {/* <div className='heaven-utf'>&#9776;</div> */}
        </div>
        <div className ={`hamburger ${isChange ? "change" : ""}`} onClick={handleToggle}>
            <div className={`bar1 ${isChange ? "change" : " "}`}></div> 
            <div className={`bar2 ${isChange ? "change" : " "}`}></div>
            <div className={`bar3 ${isChange ? "change" : " "}`}></div>  
        </div>
        </div>
        {
            dirOpen ? renderDir() : (null)
        }
    </div>

)
}
export default Header