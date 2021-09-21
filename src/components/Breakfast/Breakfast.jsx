import React from 'react';
import Menu from '../../menu.json';
import './Breakfast.css';
import Items from './Items';

const Breakfast = (props) => {
  const { addToOrder } = props;
  const items = Menu.breakfast;

  return(
    <div className="breakfast-container">
      <div className="breakfast-box">
        <p className="text-hour">
          From 8AM to 11AM
        </p>
        <div className="breakfast-grid">
          <Items items={items} addToOrder={addToOrder}></Items>
        </div>
      </div>
    </div>
  )
};

export default Breakfast;