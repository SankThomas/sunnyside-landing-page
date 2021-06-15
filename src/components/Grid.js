import { useState } from "react"
import { grid } from "../data/grid"

const Grid = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(grid)

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4">
        {cards.map(({ id, image }) => (
          <div key={id}>
            <img src={image} alt="" />
          </div>
        ))}
      </section>
    </>
  )
}

export default Grid
