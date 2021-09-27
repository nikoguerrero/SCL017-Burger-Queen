import React, { useState, useEffect } from 'react';
import './WaiterScreen.css'
import title from './images/apptitle.png'; 
import Order from '../Order/Order';
import Table from '../Table/Table';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import foodItems from '../../menu.json';
import Logout from '../Logout/Logout';

const WaiterScreen = () => {
  const recommendations = [];
  for (const recommendation of foodItems.recommendations) {
    recommendations.push(foodItems[recommendation.menuName][recommendation.index]);
  }

  const getMenuItems = (category) => {
    switch (category) {
      case 'recommendations': {
        return recommendations;
      }
      default:
        return foodItems[category];
    }
  }

  const [order, setOrder] = useState([]);
  const [category, setCategory] = useState('recommendations');
  const [items, setItems] = useState(getMenuItems(category));
  const [table, setTable] = useState(null);

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
    setItems(getMenuItems(category));
  }, [category]);

  return (
    <div className="waiter-grid">
      <div className="image-container">
        <img src= { title } alt="app name" className="img-title"></img>
      </div>
      <Logout />
      <Menu
        addToOrder={addToOrder}
        items={items}
        category={category}
      ></Menu>
      <Table
        setTable={setTable}
      ></Table>
      <Order
        order={order}
        addToOrder={addToOrder}
        removeFromOrder={removeFromOrder}
        table={table}
      ></Order>
      <Navbar
        setCategory={setCategory}
      ></Navbar>
    </div>
  )
}

export default WaiterScreen;
