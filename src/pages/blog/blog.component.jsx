import React, {useState} from 'react'

import './blog.styles.scss'
import ContentCard from '../../components/content-card/content-card.component'
//import {marked} from "marked";
import ReactMarkdown from 'react-markdown'; 
// const Blog = () => 
//     (
//         <div className="blog-page">
//             <h1>Musings aplenty</h1>
//             <ContentCard id='0' heading='A Blog powered by NextJS (or kin)'>
//             How can I funnel NextJS output into this component?
//                 </ContentCard>
//         </div>
//     )

// import mdSource from '../../blog/test.md';

//marked.setOptions({
//   gfm: true
//})


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source: "",
            markdown: "",
        }
    }
    componentDidMount(){
        const mdSource = require("../../blog/test.md");
        fetch(mdSource)
            .then(res => {
                return res.text()
            })
            .then(text => {
                this.setState({
                    source: mdSource,
                    markdown: text
                })
            })
    }
    
    render () {
        const { source, markdown} = this.state;
        return (
            <ContentCard>
           {/* <div dangerouslySetInnerHTML={{__html:compiled}} />*/}
            <p>html: {source}</p>
            <ReactMarkdown children={markdown}/>
            <h6>The Above was compiled to HTML from the below:</h6>
            <code>{markdown}</code>
            </ContentCard>
            
        )
    }
}
export default Blog;