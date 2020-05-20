import React, { Component } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { ProductConsumer } from "../../../context"

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <ProductConsumer>
        {value => (
          <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{ minHeight: "100%" }}>
              <img src={img} alt="ramen" className="card-img-top" />
              <div className="card-body text-center">
                <h6>{title}</h6>
                <h6>${price}</h6>
                <button
                  className="btn btn-yellow mt-3 text-capitalize"
                  onClick={() => value.addToCart(id)}
                  aria-label="add to cart"
                  disabled={inCart ? true : false}
                >
                  {inCart ? "added" : "add to cart"}
                </button>
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    )
  }
}
