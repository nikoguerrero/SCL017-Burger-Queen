import React, { useState } from 'react';
import './Menu.css'
import title from './images/apptitle.png'; 
import Order from '../Order/Order';
import Waiter from '../Waiter/Waiter';
import Breakfast from '../Breakfast/Breakfast';

export default function Menu() {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);
    if (itemExists) {
      setOrder(
        order.map((orderItem) => 
        orderItem.id === item.id ? { ...itemExists, qty: itemExists.qty + 1 } : orderItem 
        )
      );
    } else {
      setOrder([...order, { ...item, qty: 1 }]);
    }
  };

  const removeFromOrder = (item) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);
    if (itemExists.qty === 1) {
      setOrder(order.filter((orderItem) => orderItem.id !== item.id))
    } else {
      setOrder(
        order.map((orderItem) => 
        orderItem.id === item.id ? { ...itemExists, qty: itemExists.qty - 1 } : orderItem 
      )
      )
    }
  };

  return (
    <div className="menu-grid">
      <div className="image-container">
      <img src= { title } alt="app name" className="img-title"></img>
      </div>
      <Breakfast
        addToOrder={addToOrder}
      ></Breakfast>
      <Waiter></Waiter>
      <Order
        order={order}
        addToOrder={addToOrder}
        removeFromOrder={removeFromOrder}
      ></Order>
    </div>
  )
}
