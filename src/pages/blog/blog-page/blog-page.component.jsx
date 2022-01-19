import React, {useState} from 'react'

import './blog-page.styles.scss'
import BlogArticle from '../../../components/blog-article/blog-article.component.jsx'
/*
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
            <p>html: {source}</p>
            <ReactMarkdown children={markdown}/>
            <h6>The Above was compiled to HTML from the below:</h6>
            <code>{markdown}</code>
            </ContentCard>
            
        )
    }
}
*/

const BlogPage = (props) => {
    <BlogArticle mdSource = {props} />
}

export default BlogPage;