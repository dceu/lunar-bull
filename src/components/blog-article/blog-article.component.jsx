import React from 'react'
import './blog-article.styles.scss'
import ContentCard from '../content-card/content-card.component.jsx'
import ReactMarkdown from 'react-markdown'

class BlogArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: "",
            source: ""
        }
    }
    componentDidMount(){
        const mdSource = require("../../../blog-src/test.md"); // mdSource to be passed as prop
        fetch(mdSource)
            .then(res => {
                return res.text()
            })
            .then(mdText => {
                this.setState({
                    source: mdSource,
                    markdown: mdText
                })
            })
    }
    
    render () {
        const {source, markdown} = this.state;
        return (
            <ContentCard>
            <ReactMarkdown children = {markdown} />
            </ContentCard>
            )
        }
}
export default BlogArticle;