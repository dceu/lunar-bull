import React from 'react'

import './contact.styles.scss'
import ContentCard from '../../components/content-card/content-card.component'

const Contact = () => 
    (
        <div className = "contact-page">
            <h1>Contact</h1>
            <ul>
            <li><a href="mailto:donovanuy@gmaill.com">Email</a></li>
            <li><a href="https://www.linkedin.com/in/donovanuy/">LinkedIn</a></li>
            <li><a href="https://www.github.com/dceu/">GitHub</a></li>
            <li><a href="https://www.instagram.com/donovanuy/">Instagram</a></li>
            </ul>
        </div>
    )


export default Contact;