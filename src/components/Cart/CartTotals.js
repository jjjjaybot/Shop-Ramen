import React from "react"
import { Link } from "gatsby"
import PayPal from "./PayPal"

const CartTotals = ({ value, history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div>
          <div
            className={`col-12 mt-2 mr-sm-5 text-right col-sm-12 text-capitalize paypal`}
          >
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                onClick={() => clearCart()}
                type="button"
                aria-label="clear cart"
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">
                subtotal: <strong>$ {cartSubTotal}</strong>
              </span>
            </h5>
            <h5>
              <span className="text-title">
                tax: <strong>$ {cartTax}</strong>
              </span>
            </h5>
            <h5>
              <span className="text-title">
                total: <strong>$ {cartTotal}</strong>
              </span>
            </h5>
            <PayPal total={cartTotal} clearCart={clearCart} history={history} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CartTotals
