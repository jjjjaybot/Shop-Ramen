import React from "react"
import { Link } from "gatsby"

const EmptyCart = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>your cart is currently empty</h1>
        </div>
        <div className="col-10 mx-auto text-center text-title">
          <button className="btn btn-yellow mt-3 mb-5 text-capitalize">
            <Link to="/" className="btn-yellow">
              Go back to home page
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmptyCart
