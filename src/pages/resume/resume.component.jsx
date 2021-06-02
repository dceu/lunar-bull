import React from 'react';

import './resume.styles.scss'
import ContentCard from '../../components/content-card/content-card.component'

const Resume = () => 
    (
        <div className = "resume-page">
            <h1>Resume Page</h1>
            <ContentCard id='0' heading='2021' body='Below is a jpg preview of a pdf'/>
            <a href='/assets/resume/resume_2021_state.pdf'>
                <img src='/assets/resume/resume_2021_state1024_1.jpg'></img>
            </a>
            </div>
    )


export default Resume;