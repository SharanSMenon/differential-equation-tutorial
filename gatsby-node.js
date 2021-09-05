const path = require('path');

module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    const bookTemplate = path.resolve('./src/templates/book.js');
    const res = await graphql(`
        query {
            allContentfulBookPage {
                edges {
                    node {
                        slug
                        childContentfulBookPageContentTextNode {
                            childMarkdownRemark {
                                id
                            }
                        }
                    }
                }
            }
        }
      `);

      res.data.allContentfulBookPage.edges.forEach(edge => {
          createPage({
              component: bookTemplate,
              path: `/book/${edge.node.slug}`,
              context: {
                  slug: edge.node.slug,
                  markdownRemarkId: edge.node.childContentfulBookPageContentTextNode.childMarkdownRemark.id
              }
          });
      });
}