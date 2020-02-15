import PropTypes from "prop-types"
import React from "react"

const SwiperImage = ({ node: { url } }) => (
  <div className="swiperimage">
    <img src={url} alt=""/>
  </div>
)

export default SwiperImage