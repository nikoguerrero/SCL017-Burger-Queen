import React from 'react';
import './Menu.css';
import Items from './Items';

const Menu = (props) => {
  const { addToOrder, items } = props;

  return(
    <div className="menu-container">
      <div className="menu-box">
        <p className="text-hour">
          From 8AM to 11AM
        </p>
        <div>
          <Items items={items} addToOrder={addToOrder}></Items>
        </div>
      </div>
    </div>
  )
};

export default Menu;