import React from 'react'
import './directory.styles.scss'
import {Link} from 'react-router-dom'
class Directory extends React.Component {
    constructor() {
        super();



        this.state = {
            pages: [
                {
                    id: 0,
                    title: 'resume',
                    url: '/resume',
                    icon: '9784'
                },{
                    id: 1,
                    title: 'projects',
                    url: '/projects',
                    icon: '9883'
                },{
                    id: 2,
                    title: 'blog',
                    url: '/blog',
                    icon: '10081'
                },{
                    id: 3,
                    title: 'bio',
                    url: '/bio',
                    icon: '9778'
                },{
                    id: 4,
                    title: 'contact',
                    url: '/contact',
                    icon: '128172'
                },
            ]        
        }
    }

    render() {
        return(
            <div className = 'directory'>
                
                {this.state.pages.map( page => (
                    <div className="directory-option">
                    
                    <Link key = {page.id} to={page.url}>{page.title.toUpperCase()}</Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default Directory;