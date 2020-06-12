import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "../components/navbar"

const BaseLayout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    social {
                        linkedin
                        github
                    }
                }
            }
        }
    `)
    
    return (
        <div className="main-container">
            <NavBar />
            <main>{children}</main>
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                        <strong>Benjamin Durand &#169; 2020</strong> - Made using GatsbyJS and Bulma.
                    </p>
                    <a className="mx-2" href={data.site.siteMetadata.social.linkedin}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a className="mx-2" href={data.site.siteMetadata.social.github}>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BaseLayout