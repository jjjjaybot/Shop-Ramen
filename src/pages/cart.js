import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Cart from "../components/Cart"

const CartPage = ({ data }) => (
  <Layout>
    <SEO title="cart" />
    {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Shopping Cart"
      styleClass="about-background"
    /> */}
    <Cart />
  </Layout>
)

// export const query = graphql`
//   {
//     img: file(relativePath: { eq: "cart1.jpeg" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `

export default CartPage
