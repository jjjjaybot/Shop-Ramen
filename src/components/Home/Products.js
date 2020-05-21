import React, { Component } from "react"
import Product from "./Product"
import Title from "../Globals/Title"
import { ProductConsumer } from "../../../context"

class Products extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  if (value) {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />
                    })
                  } else {
                    return
                  }
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Products
