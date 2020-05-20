import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              illo facilis quasi tempore dolorem incidunt sapiente quod, omnis
              perspiciatis provident iste pariatur nesciunt nisi cum ab fuga
              consectetur corporis ullam facere quaerat distinctio placeat quia!
              Nam quis similique obcaecati sunt sapiente amet molestias est illo
              eum, dolorem exercitationem corporis voluptatum?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
