import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header-styles.scss"

const Header = ({ siteTitle, menuItems }) => (
  <header>
    <div className="header">
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <ul className="headerMenu">
        {menuItems.map(item => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  menuItems: [
    { link: "/about", name: "About" },
    { link: "/action", name: "Action" },
    { link: "/contact", name: "Contact" },
    { link: "/donate", name: "Donate" },
    { link: "/events", name: "Events" },
    { link: "/join", name: "Join" },
  ],
}

export default Header
