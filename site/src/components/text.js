import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Text = ({ node: { title, slug, image, description } }) => (
    <a href={slug}
        style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `black`,
                        textDecoration: `none`,
                    }}
                >
                    {title}
                </Link>
            </h1>
        </div>
    </a>
)

Text.propTypes = {
    siteTitle: PropTypes.string,
}

Text.defaultProps = {
    siteTitle: ``,
}

export default Text
