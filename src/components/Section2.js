import { useState } from "react"
import { section2 } from "../data/section2"

const Section2 = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(section2)
  return (
    <>
      <section>
        {cards.map(({ id, image, title, desc }) => (
          <div key={id} className="relative">
            <img src={image} alt={title} />
            <article className="absolute bottom-10 left-0 z-10 text-center px-5">
              <h3 className="text-2xl font-bold mb-5">{title}</h3>
              <p>{desc}</p>
            </article>
          </div>
        ))}
      </section>
    </>
  )
}

export default Section2
