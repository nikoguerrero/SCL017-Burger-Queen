import React, { useState, useEffect } from 'react';
import './WaiterScreen.css'
import title from './images/apptitle.png'; 
import Order from '../Order/Order';
import Waiter from '../Waiter/Waiter';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import foodItems from '../../menu.json';

export default function WaiterScreen() {
  const [order, setOrder] = useState([]);
  const [category, setCategory] = useState('breakfast');
  const [items, setItems] = useState(foodItems[category]);

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

  useEffect(() => {
    switch (category) {
      case 'recommendations': {
        const recommendations = [];
        for (const recommendation of foodItems.recommendations) {
          recommendations.push(foodItems[recommendation.menuName][recommendation.index]);
        }
        setItems(recommendations);
        break;
      }
      default:
        setItems(foodItems[category]);
        break;
    }
  }, [category]);

  return (
    <div className="waiter-grid">
      <div className="image-container">
      <img src= { title } alt="app name" className="img-title"></img>
      </div>
      <Menu
        addToOrder={addToOrder}
        items={items}
      ></Menu>
      <Waiter></Waiter>
      <Order
        order={order}
        addToOrder={addToOrder}
        removeFromOrder={removeFromOrder}
      ></Order>
      <Navbar
        setCategory={setCategory}
      ></Navbar>
    </div>
  )
}
