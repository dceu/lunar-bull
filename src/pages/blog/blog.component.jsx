import React from 'react'

import './blog.styles.scss'
import ContentCard from '../../components/content-card/content-card.component'

const Blog = () => 
    (
        <div className="blog-page">
            <h1>Musings aplenty</h1>
            <ContentCard id='0' heading='A Blog powered by NextJS (or kin)'
             body=
             'How can I funnel NextJS output into this component?' />
        </div>
    )


export default Blog;