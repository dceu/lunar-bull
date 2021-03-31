import React from 'react'
import { Link } from 'react-router-dom'
import Directory from '../directory/directory.component'
import './header.styles.scss'

const Header = () => (
    <div className = 'header'>
        <div className = 'logo'>
            <Link className='home' to='/home'></Link>
            {/* <div className='heaven-utf'>&#9776;</div> */}
        </div>
        
        <Directory />
        <div className='contact-info'>
            <a href='mailto:donovanuy@gmail.com'>donovanuy@gmail.com</a>
            <a href='https:github.com/dceu/'>github.com/dceu</a>
        </div>

    </div>

)

export default Header