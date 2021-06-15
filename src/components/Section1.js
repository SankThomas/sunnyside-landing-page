import { useState } from "react"
import { section1 } from "../data/section1"

const Section1 = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(section1)

  return (
    <>
      <section className="section-1 mt-0 flex flex-col">
        {cards.map(({ id, image, title, desc, button }) => (
          <div key={id} className="flex flex-col-reverse">
            <article className="px-5 text-center">
              <h2 className="font-bold text-3xl mt-8 mb-5">{title}</h2>
              <p>{desc}</p>
              <button className="btn-section-1 my-5 uppercase text-base">
                {button}
              </button>
            </article>

            <div>
              <img src={image} alt={title} />
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Section1
