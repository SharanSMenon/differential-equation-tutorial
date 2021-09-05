import React from 'react';
import Layout from '../components/layout'

import { Link, graphql, useStaticQuery } from 'gatsby';
import './book.scss';
const BookPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBookPage( sort: {fields: order, order:ASC}) {
                totalCount
                edges {
                    node {
                        title
                        author
                        description
                        slug
                        date(formatString:"MMMM Do, YYYY")
                        childContentfulBookPageContentTextNode {
                            childMarkdownRemark {
                                timeToRead
                            }
                        }
                    }
                }
            }   
        }
    `)
    const edges = data.allContentfulBookPage.edges;
    return (
        <Layout>
            <title>Topics | Differential Equations</title>
            <h1>Topics</h1>
            <p>There are {data.allContentfulBookPage.totalCount} topics</p>
            <ol className={"posts"}>
                {
                    edges.map((edge, i) => {
                        return (
                            <li key={i} className={"post"}>
                                <Link to={`/book/${edge.node.slug}`}>
                                    <h3>{edge.node.title}</h3>
                                    <p>{edge.node.childContentfulBookPageContentTextNode.childMarkdownRemark.timeToRead} min read - {edge.node.description}</p>
                                </Link>
                            </li>
                        )
                    }
                    )
                }
            </ol>
        </Layout>
    )
}
export default BookPage