import React, { useState, useEffect } from 'react';
import './Menu.css'
import title from './images/apptitle.png'; 
import Order from '../Order/Order';
import Breakfast from '../Breakfast/Breakfast';

export default function Menu() {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    console.log(item);
    setOrder([...order, item]);
  };

  const removeFromOrder = (item) => {
    let hardCopy = [...order];
    hardCopy = hardCopy.filter((orderItem) => orderItem.id !== item.id);
    setOrder(hardCopy);
  };

  return (
    <div className="menu-grid">
      <img src= { title } alt="app name" className="img-title"></img>
      <Breakfast
        addToOrder={addToOrder}
      ></Breakfast>
      <Order
        order={order}
        addToOrder={addToOrder}
        removeFromOrder={removeFromOrder}
      ></Order>
    </div>
  )
}
