import React from 'react'
import { Link } from 'react-router-dom'
import Directory from '../directory/directory.component'
import './header.styles.scss'

const Header = () => (
    <div className = 'header'>
        <div className = 'logo'>
            <Link className='home-utf' to='/'>&#8962;</Link></div>
        <div className = 'options'>
            
        </div>
        <Directory />

    </div>

)

export default Header