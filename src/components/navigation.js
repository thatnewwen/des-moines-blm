import React from "react"
import Menu from "./menu"

class Navigation extends React.Component {
  render() {
    return (
      <>
        <button className="menu-button" onClick={() => this.toggleMenu()}>
          MENU
        </button>

        <Menu ref={el => (this.childMenu = el)} />
      </>
    )
  }

  toggleMenu() {
    this.childMenu.open()
  }
}

export default Navigation
