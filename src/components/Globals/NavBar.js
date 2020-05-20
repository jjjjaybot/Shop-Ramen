import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCart, FaCartArrowDown } from "react-icons/fa"
import Badge from "@material-ui/core/Badge"

export default class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/about",
        text: "About",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    const { css, links, navbarOpen } = this.state
    console.log(this.props)
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
          {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
          aria-label="navbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={css}>
          <ul className="navbar-nav mx-auto">
            {links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item ml-sm-5">
              <Link to="cart" className="nav-link">
                <Badge badgeContent={0} color="secondary">
                  <FaCartArrowDown className="cart-icon" />
                </Badge>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
