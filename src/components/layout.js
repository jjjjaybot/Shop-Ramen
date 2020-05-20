/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import "./bootstrap.min.css"

import NavBar from "./Globals/NavBar"
import Footer from "./Globals/Footer"
import { ProductProvider } from "../../context"

const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
