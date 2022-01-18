import React from 'react'

import './blog.styles.scss'
import ContentCard from '../../components/content-card/content-card.component'

// const Blog = () => 
//     (
//         <div className="blog-page">
//             <h1>Musings aplenty</h1>
//             <ContentCard id='0' heading='A Blog powered by NextJS (or kin)'>
//             How can I funnel NextJS output into this component?
//                 </ContentCard>
//         </div>
//     )

import md from '../../blog/test.md';

class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            content :[
                
            ]
        }
    }

    // rolodex list of blog assets
        // at page level
        // fetch asset
        // stringify asset
        // pass to react-markdown
}

export default Blog;