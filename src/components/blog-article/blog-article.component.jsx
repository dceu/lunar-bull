import React from 'react'
import './blog-article.styles.scss'
import ContentCard from '../content-card/content-card.component.jsx'
import ReactMarkdown from 'react-markdown'

class BlogArticle extends React.Component {
    constructor({mdSource}) {
        console.log('componentDidMount')
        console.log(`${mdSource}`)
        super({mdSource});
        this.state = {
            markdown: "",
            source:mdSource 
        }
    }
    componentDidMount(){
        console.log('in a A BlogArticle Component')
        console.log(`markdown src: ${this.state.source}` )
        const mdSource = require(`../../blog-src/${this.state.source}`); // mdSource to be passed as prop
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