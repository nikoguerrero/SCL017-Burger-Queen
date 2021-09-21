import React, { useState, useEffect } from 'react';
import './Menu.css'
import title from './images/apptitle.png'; 
import Order from '../Breakfast/Order';
import Breakfast from '../Breakfast/Breakfast';

export default function Menu() {
  const [order, setOrder] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);

  const addToOrder = (item) => {
    console.log(item);
    setOrder([...order, item]);
  };

  const removeFromOrder = (item) => {
    let hardCopy = [...order];
    hardCopy = hardCopy.filter((orderItem) => orderItem.id !== item.id);
    setOrder(hardCopy);
  };

  useEffect(() => {
    total();
  }, [order]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < order.length; i++) {
      totalVal += order[i].price;
    }
    setOrderTotal(totalVal);
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
        orderTotal={orderTotal}
      ></Order>
    </div>
  )
}
