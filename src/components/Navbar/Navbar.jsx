import React, { useState } from "react";
import './Navbar.scss'; 

const Navbar = (props) => {
  const { setCategory } = props;
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/#">
            <p className="nav__itemlabel">RECOMMENDATIONS</p>
          </a>
        </li>
        <li className="nav__item">
          <a onClick={() => {console.log('clicked breakfast'); setCategory('breakfast')}}>
            <p className="nav__itemlabel">BREAKFAST</p>
          </a>
        </li>
        <li className="nav__item">
          <a onClick={() => {console.log('clicked sandwiches'); setCategory('sandwiches')}}>
            <p className="nav__itemlabel">SANDWICHES</p>
          </a>
        </li>
        <li className="nav__item">
          <a onClick={() => {console.log('clicked drinks'); setCategory('drinks')}}>
            <p className="nav__itemlabel">DRINKS</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;