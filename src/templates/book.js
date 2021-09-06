import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import "./book.scss";
require(`katex/dist/katex.min.css`)

export const query = graphql`
    query ($slug: String
           $markdownRemarkId: String
            ) {
        contentfulBookPage(slug: { eq: $slug }) {
            title
            author
            date(formatString:"MMMM Do, YYYY")
        }
        markdownRemark(id: { eq: $markdownRemarkId }) {
            html
        }
    }
`
const BookPage = (props) => {
    let darkMode = localStorage.getItem('darkMode') == "true"
    const dt = props.data.contentfulBookPage;
    const markdown = props.data.markdownRemark;
    return (
        <Layout darkMode={darkMode}>
            <title>{dt.title} | Differential Equations</title>
            <h1>{dt.title}</h1>
            <p>{dt.author} - {dt.date}</p>
            <hr></hr>
            
            <section dangerouslySetInnerHTML={{__html:markdown.html}}></section>
        </Layout>
    )
}

export default BookPage;