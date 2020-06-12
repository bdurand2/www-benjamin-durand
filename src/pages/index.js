import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faJava, faPhp, faAngular, faReact} from '@fortawesome/free-brands-svg-icons'

import BaseLayout from "../templates/base"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
    <BaseLayout>
        <SEO title="Home" />
        <div className="section">
            <div className="container">
                <div className="column is-12">
                    <h1 className="title has-text-centered section-title">Who am I ?</h1>
                </div>
                <div className="columns is-multiline">
                    <div className="column is-6 has-vertically-aligned-content">
                        <p className="is-larger has-text-centered">
                            <strong>Plainly put, I am a freelance full-stack developer. I conceive and implement applications, taking to heart to make them fast, secure and useful.</strong>
                        </p>
                        <p>I am also currently part-time working at Emotic in Nantes, helping build a wide variety of applications for a multitude of customers.</p>
                        <p>Very curious by nature, I am always trying new technologies, either to bring more relevant solutions to customers, or simply for the sheer pleasure of discovering stuff.</p>
                        <div className="has-text-centered">
                            <button className="button is-primary">
                                Want to know more ?
                            </button>
                        </div>
                    </div>
                    <div className="column is-6 right-image " data-aos="fade-left">
                        <Img className="is-rounded" fluid={data.aboutImage.childImageSharp.fluid}></Img>
                    </div>
                </div>
            </div>
        </div>
        <div className="section section-dark">
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-12">
                        <h1 className="title has-text-centered section-title">Services</h1>
                    </div>
                </div>
                <div className="columns is-12">
                    <div className="column is-4 has-text-centered">
                        <div className="columns is-12">
                            <div className="column is-2"></div>
                            <div className="column is-3">
                                <FontAwesomeIcon icon={faJava} size="2x" />
                            </div>
                            <div className="column is-2"></div>
                            <div className="column is-3">
                                <FontAwesomeIcon icon={faPhp} size="2x" />
                            </div>
                            <div className="column is-2"></div>
                        </div>
                        <hr />
                        <h2>
                            Backend Development
                        </h2>
                    </div>
                    <div className="column is-4 has-text-centered">
                        <div className="columns is-12">
                            <div className="column is-2"></div>
                            <div className="column is-3">
                                <FontAwesomeIcon icon={faAngular} size="2x" />
                            </div>
                            <div className="column is-2"></div>
                            <div className="column is-3">
                                <FontAwesomeIcon icon={faReact} size="2x" />
                            </div>
                            <div className="column is-2"></div>
                        </div>
                        <hr />
                        <h2>
                            Frontend Development
                        </h2>
                    </div>
                    <div className="column is-4 has-text-centered">
                        <div className="columns is-12">
                            <div className="column is-12">
                                <FontAwesomeIcon icon={faLayerGroup} size="2x" />
                            </div>
                        </div>
                        <hr />
                        <h2>
                            JAMStack
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="columns is-12">
                    <div className="column is-12">
                        <h1 className="title has-text-centered section-title">Get in touch</h1>
                    </div>
                </div>
                <div className="columns is-12">
                    <div className="column is-12 has-text-centered">
                        <a className="button is-primary" href="mailto:benjamin.durand.dev@protonmail.com">Send me an email, and I'll get back to you !</a>
                    </div>
                </div>
            </div>
        </div>
    </BaseLayout>
)

export default IndexPage

export const pageQuery = graphql`
    query IndexData {
        aboutImage: file(relativePath: {eq: "about-image.jpg"}) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 640) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }  
`
