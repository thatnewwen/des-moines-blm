import React, { useImperativeHandle, useRef } from "react"

import { Link } from "gatsby"

import styles from "./menu.scss"

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    const menuItems = [
      { link: "/about", name: "About" },
      { link: "/action", name: "Action" },
      { link: "/contact", name: "Contact" },
      { link: "/donate", name: "Donate" },
      { link: "/events", name: "Events" },
      { link: "/join", name: "Join" },
    ]

    return (
      <div
        role="button"
        tabIndex="0"
        className={`menu ${this.state.open ? `open` : ""}`}
        onClick={() => this.close()}
        onKeyDown={() => this.close()}
      >
        <ul className="mobileMenu">
          {menuItems.map(item => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
  }
}

export default React.forwardRef((props, ref) => {
  const menuRef = useRef()

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open()
    },
  }))

  return <Menu ref={menuRef} {...props} />
})
