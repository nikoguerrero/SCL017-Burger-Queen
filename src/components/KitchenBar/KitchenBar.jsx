import React from 'react';

const KitchenBar = (props) => {
  const { setStatus } = props;
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
        <li className="nav__item nav__item-active"> 
          <a onClick={() => setStatus('all orders')}>
            <p>All ORDERS</p>
          </a>
        </li>
        <li className="nav__item">
          <a onClick={() => setStatus('new')}>
            <p>NEW</p>
          </a>
        </li>
        <li className="nav__item">
          <a onClick={() => setStatus('active')}>
            <p>ACTIVE</p>
          </a>
        </li>
        <li className="nav__item">
          <a onClick={() => setStatus('done')}>
            <p>DONE</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default KitchenBar;