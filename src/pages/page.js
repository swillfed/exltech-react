import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

const markdown = `
  # this is a title
  ## This is a subtitle
  [this](is a link)
  this is some body test
`
const SecondPage = (props) => {
  const data = props.data.allWordpressPage.edges.find(edge => edge.node.slug === props['*']).node
  return (
    <Layout>
      <h1>{ data.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />
      <ReactMarkdown source={ markdown } />
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`

export default SecondPage
