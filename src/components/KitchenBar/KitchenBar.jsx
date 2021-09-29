import React from 'react';

const KitchenBar = () => {
  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item nav__item-active"> 
          <a>
            <p>All ORDERS</p>
          </a>
        </li>
        <li className="nav__item">
          <a>
            <p>NEW</p>
          </a>
        </li>
        <li className="nav__item">
          <a>
            <p>ACTIVE</p>
          </a>
        </li>
        <li className="nav__item">
          <a>
            <p>DONE</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default KitchenBar;