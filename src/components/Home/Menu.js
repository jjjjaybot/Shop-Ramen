import React, { Component } from "react"
import Title from "../Globals/Title"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { coffeeItems: tempItems, allstyle: true }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { coffeeItems: items, style: true }
      })
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our toppings" />
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  const style = category
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      aria-label={category}
                      onClick={() => {
                        this.handleItems(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/* items */}
            <div className="row mb-5">
              <div className="row">
                {this.state.coffeeItems.map(({ node }) => {
                  return (
                    <div
                      key={node.id}
                      className="col-11 col-md-6 my-3 d-flex mx-auto"
                    >
                      <div>
                        <img
                          style={{ borderRadius: "50%" }}
                          src={node.image.fixed.src}
                          alt="ramen"
                        />
                      </div>
                      <div>
                        <div className="flex-grow-1 px-3">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-0">
                              <p style={{ marginBottom: "0" }}>{node.title}</p>
                            </h6>
                          </div>
                          <small className="text-muted">
                            {node.description.description}
                          </small>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best from our menu"></Title>
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
