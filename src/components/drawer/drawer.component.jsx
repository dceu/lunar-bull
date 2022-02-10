import React, {useState} from 'react'
import './drawer.styles.scss'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Drawer = ({pages}) => {
   let [isOpen, setOpen] = useState(true); 
   
   const handleChange = () => {
       setOpen(prev => !prev);
   }

    return (
        <>
        <div className={`drawer-container ${isOpen ? 'open' : 'closed'}`}>
            <div className= 'test' onClick={handleChange}>
            
            </div>
               {
                   pages.map((page, idx) => (
                   <Link  key={idx} to={`/blog/${page.fileName}`} onClick={
                   ()=> isOpen? setOpen(!isOpen) : ""}
                   >{page.title}</Link>
                   ))
               } 
        </div>
        <div id="Open" className="arrowButton" onClick={handleChange}>
        <p >{'\u21F5'}</p>
        </div>
        </>
        )
}

export default Drawer

