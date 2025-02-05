import React from "react";
import './Navbar.scss'; 

const Navbar = (props) => {
  const { setCategory } = props;
  let navItem = document.querySelectorAll(".nav__item");

  navItem.forEach((link) => link.addEventListener("click", listActive));

  function listActive() {
    navItem.forEach((link) => link.classList.remove("nav__item-active"));
    this.classList.add("nav__item-active");
  }

  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item nav__item-active" onClick={() => setCategory('recommendations')}> 
          <a>
            <p>RECOMMENDATIONS</p>
          </a>
        </li>
        <li className="nav__item" onClick={() => setCategory('breakfast')}>
          <a>
            <p>BREAKFAST</p>
          </a>
        </li>
        <li className="nav__item" onClick={() => setCategory('lunch')}>
          <a>
            <p>LUNCH</p>
          </a>
        </li>
        <li className="nav__item" onClick={() => setCategory('drinks')}>
          <a>
            <p>DRINKS</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;