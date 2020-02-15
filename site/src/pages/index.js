import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {graphql} from "gatsby";

import Text from "../components/text";

const IndexPage = ({data: {allContentfulProduct}}) => (
    <Layout>
        <SEO title="Home"/>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <Image/>
        </div>

        <div>
            {allContentfulProduct.edges.map(({node}) => (
                <Text
                    key={node.id}
                    node={{...node, slug: `products/${node.slug}`}}
                />
            ))}
        </div>

        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export const query = graphql`
    {
        allContentfulProduct {
            edges {
                node {
                    title
                    slug
                    image {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;