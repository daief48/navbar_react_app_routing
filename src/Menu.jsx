import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function Menu() {
  return (
    <>
        <div className="menu_style">
            <NavLink exact activeClassName="active_class" to="/">
                About Us
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">
                Contact Us
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/service">
                Services
            </NavLink>
        </div>
    </>
  )
}
