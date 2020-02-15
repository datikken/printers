import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/scss/main.scss"
import { graphql } from "gatsby"
import SwiperImage from "../components/swiper/swiperImage"
import News from "../components/news/news"
import Banner from "../components/banner/banner"
import Viewed from "../components/viewed/viewed"

const IndexPage = ({ data: { allContentfulSwiper } }) => {

  return (
    <Layout>
      <SEO title="Home"/>
      {allContentfulSwiper.edges.map(({node}) => (
        <SwiperImage
          key={node.id}
          node={{...node, url: `${node.image.file.url}`}}
        />
      ))}

      <div className="columns mobile-layout">
        <div className="main_column">

        </div>
        <div class="left_column">

        </div>
      </div>

      <div className="columns desktop-layout">
        <div className="left_column">
          <News/>
          <Banner/>
          <Viewed/>
        </div>
        <div class="main_column">
          <h1>Yo</h1>
        </div>
      </div>


    </Layout>
  )
}

export const query = graphql`
    {
        allContentfulSwiper {
            edges {
                node {
                    image {
                        file {
                            url
                        }
                    }
                    title
                }
            }
        }
    }
`

export default IndexPage