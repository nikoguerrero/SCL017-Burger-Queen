import React from 'react';
import foodItems from '../../menu.json';
import './Menu.css';
import Items from './Items';

const Menu = (props) => {
  const { addToOrder, category } = props;
  const items = foodItems.breakfast;
  // const recommendations = [];
  // for (const recommendation of Menu.recommendations) {
  //   recommendations.push(Menu[recommendation.menuName][recommendation.index]);
  // }

  return(
    <div className="menu-container">
      <div className="menu-box">
        <p className="text-hour">
          From 8AM to 11AM
        </p>
        <div>
          <Items items={items} addToOrder={addToOrder} category={category}></Items>
        </div>
      </div>
    </div>
  )
};

export default Menu;