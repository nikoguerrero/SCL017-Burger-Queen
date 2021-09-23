import React from 'react';
import './Menu.css';
import Items from './Items';

const Menu = (props) => {
  const { addToOrder, items, category } = props;

  return(
    <div className="menu-container">
      <div className="menu-box">
        <p className="text-hour">
        {category === 'breakfast' ? ' From 8AM to 11AM ' :''} 
        </p>
          <Items items={items} addToOrder={addToOrder}></Items>
      </div>
    </div>
  )
};

export default Menu;