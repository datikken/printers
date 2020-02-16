import PropTypes from "prop-types"
import React from "react"

const SwiperImage = ({ node: { url } }) => (
    <img src={url} alt=""/>
)

export default SwiperImage