import React from "react";
import './Navbar.scss'; 

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/#">
            <p className="nav__itemlabel">RECOMMENDATIONS</p>
          </a>
        </li>

        <li className="nav__item">
          <a href="/#">
            <p className="nav__itemlabel">BREAKFAST</p>
          </a>
        </li>

        <li className="nav__item">
          <a href="/#">
            <p className="nav__itemlabel">SANDWICHES</p>
          </a>
        </li>

        <li className="nav__item">
          <a href="/#">
            <p className="nav__itemlabel">DRINKS</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;