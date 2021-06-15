import { useState } from "react"
import { testimonials } from "../data/testimonials"

const Testimonials = () => {
  // eslint-disable-next-line
  const [people, setPeople] = useState(testimonials)
  return (
    <>
      <section className="py-10 px-5">
        <h3 className="testimonials-header uppercase text-center tracking-widest text-2xl">
          Client Testimonials
        </h3>
        <div className="md:grid grid-cols-2 gap-5 lg:grid-cols-3 xl:max-w-6xl xl:mx-auto">
          {people.map(({ id, image, text, name, title }) => (
            <article key={id} className="my-10 text-center">
              <img
                src={image}
                alt={name}
                className="w-20 rounded-full mx-auto"
              />
              <p className="mt-10 mb-5">{text}</p>
              <h4 className="text-xl">{name}</h4>
              <p className="text-base">{title}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Testimonials
