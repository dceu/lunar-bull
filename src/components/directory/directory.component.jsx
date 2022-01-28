import React, {useState} from 'react'
import './directory.styles.scss'
import {Link} from 'react-router-dom'

const Directory = ({hidden}) => {
        const [ isHidden, setHidden ] = useState(hidden);
        const [pages ] = 
        useState(
           [
                {
                    id: 0,
                    title: 'blog',
                    url: '/blog',
                    icon: '10081'
                },
                {
                    id: 1,
                    title: 'portfolio',
                    url: '/portfolio',

                },
                {
                    id: 2,
                    title: 'contact',
                    url: '/contact',
                    // icon: '128172'
                },
            ]        
        );

        return(
            <div className = {`directory ${isHidden ? "hidden": ""}`}>
                
                {pages.map( page => (
                    <div className={`directory-option ${isHidden ? "hidden" : ""}`}>
                    
                    <Link key = {page.id} to={page.url}>{page.title.toUpperCase()}</Link>
                    </div>
                ))}
            </div>
        )
}

export default Directory;