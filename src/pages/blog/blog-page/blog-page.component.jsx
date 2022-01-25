import React, {useState} from 'react'
import './blog-page.styles.scss'
import BlogArticle from '../../../components/blog-article/blog-article.component.jsx'

const BlogPage = ({mdSource}) => {
       
       return(
        <BlogArticle mdSource = {mdSource} />
        )

}
export default BlogPage;