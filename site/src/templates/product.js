import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function Product({ data }) {
    return (
        <Layout>
            {/*<SEO*/}
                {/*title={data.contentfulProduct.seo.title}*/}
                {/*description={data.contentfulProduct.seo.description}*/}
            {/*/>*/}
            <div className="lesson__details">
                <h2 className="text-4xl">{data.contentfulProduct.title}</h2>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query lessonQuery($slug: String!) {
        contentfulProduct(slug: { eq: $slug }) {
            title
        }
    }
`

export default Product;