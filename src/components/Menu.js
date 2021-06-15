import { useState } from "react"
import { menu } from "../data/menu"
import CTA from "./CTA"

const Menu = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(menu)

  return (
    <>
      <ul>
        {links.map(({ id, title }) => (
          <li key={id} className="my-3">
            <button>{title}</button>
          </li>
        ))}
        <CTA />
      </ul>
    </>
  )
}

export default Menu
