import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <Seo title="Home" />

      {data.allStrapiMessages.edges.map((res, i) => (
        <div key={i}>
          <h1>{res.node.greeting}</h1>
          <h3>{res.node.id}</h3>
        </div>
      ))}
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to pge 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

const query = graphql`
  query {
    allStrapiMessages {
      edges {
        node {
          greeting
          id
        }
      }
    }
  }
`

export default IndexPage
