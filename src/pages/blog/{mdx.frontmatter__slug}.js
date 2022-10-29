import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/blogLayout'
import Seo from '../../components/seo'

const BlogPost = ({ data, children }) => {

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
 
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`


export const Head = ({ data }) => (
  <>
    <Seo title={data.mdx.frontmatter.title} />
    <Seo />
  </>
)

export default BlogPost
