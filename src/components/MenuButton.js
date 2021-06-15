import button from "../images/icon-hamburger.svg"

const MenuButton = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={button} alt="" />
      </button>
    </>
  )
}

export default MenuButton
