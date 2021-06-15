import React from "react"
import { v4 as uuidv4 } from "uuid"
import { GrFacebook } from "react-icons/gr"
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa"

export const footer = [
  {
    id: uuidv4(),
    title: "About",
  },
  {
    id: uuidv4(),
    title: "Services",
  },
  {
    id: uuidv4(),
    title: "Projects",
  },
]

export const icons = [
  {
    id: uuidv4(),
    icon: <GrFacebook />,
  },
  {
    id: uuidv4(),
    icon: <FaInstagram />,
  },
  {
    id: uuidv4(),
    icon: <FaTwitter />,
  },
  {
    id: uuidv4(),
    icon: <FaPinterest />,
  },
]
