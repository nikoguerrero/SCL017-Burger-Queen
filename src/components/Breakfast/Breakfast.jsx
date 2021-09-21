import React,  { useState, useEffect } from 'react';
import Menu from '../../menu.json';
import './Breakfast.css';

const Breakfast = () => {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    console.log(item);
    setOrder([...order, item]);
  };

  const breakfastItems = Menu.breakfast.map((item) => (
    <button className="food-btn"  key={item.id}  onClick={() => addToOrder(item)}>
    <img src={item.image} alt="food"></img>
    <div> {item.name}</div>
    <div> $ {item.price}</div>
  </button>
  ));

  const orderItems = order.map((item) => (
    <div key={item.id}>
      {`${item.name}: $${item.price}`}
      <input type="submit" value="remove" onClick={() => removeFromOrder(item)} />
    </div>
  ));

  const removeFromOrder = (item) => {
    let hardCopy = [...order];
    hardCopy = hardCopy.filter((orderItem) => orderItem.id !== item.id);
    setOrder(hardCopy);
  };

  // menuData();
  return(
    <div className="breakfast-container">
      <div className="breakfast-box">
        <p className="text-hour">
          From 8AM to 11AM
        </p>
        <div className="breakfast-grid">
          {breakfastItems}
        </div>
        <div className="order">
          <div>ORDEN</div>
          <div>{orderItems}</div>
        </div>
      </div>
    </div>
  )
};

export default Breakfast;