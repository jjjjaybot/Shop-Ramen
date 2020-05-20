import React, { Component } from "react"
import Title from "../Globals/Title"
import CardColumns from "./CardColumns"
import EmptyCart from "./EmptyCart"
import CartList from "./CartList"
import { ProductConsumer } from "../../../context"
import CartTotals from "./CartTotals"

class Cart extends Component {
  state = {}
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart } = value
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title title="your cart" />
                <CardColumns />
                <CartList value={value} />
                <CartTotals value={value} history={this.props.history} />
              </React.Fragment>
            )
          } else {
            return <EmptyCart />
          }
        }}
      </ProductConsumer>
    )
  }
}

export default Cart
