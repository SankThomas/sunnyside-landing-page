import { useState } from "react"
import { footer } from "../data/footer"
import { icons } from "../data/footer"
import logo from "../images/footer-logo.svg"

const Footer = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(footer)
  // eslint-disable-next-line
  const [socials, setSocials] = useState(icons)

  return (
    <>
      <footer className="footer">
        <div>
          <img src={logo} alt="" className="mx-auto" />
        </div>

        <nav className="mt-5 mb-10">
          <ul className="flex items-center justify-center">
            {links.map(({ id, title }) => (
              <li key={id} className="mx-3 cursor-pointer hover:text-white">
                {title}
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center justify-center">
          {socials.map(({ id, icon }) => (
            <li key={id} className="mx-3">
              <button className="hover:text-white duration-500 transition-all">
                {icon}
              </button>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}

export default Footer
