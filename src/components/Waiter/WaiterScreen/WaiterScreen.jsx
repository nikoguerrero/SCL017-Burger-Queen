import React, { useState, useReducer, useEffect } from 'react';
import './WaiterScreen.css'
import Order from '../Order/Order';
import Table from '../Table/Table';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import foodItems from '../../../menu.json';
import { db, auth } from '../../../firebase';

const WaiterScreen = () => {
  const recommendations = [];
  for (const recommendation of foodItems.recommendations) {
    recommendations.push(foodItems[recommendation.menuName][recommendation.index]);
  }

  const setMenuItems = (oldCategory, category) => {
    switch (category) {
      case 'recommendations': {
        items = recommendations;
        break;
      }
      default:
        items = foodItems[category];
        break;
    }
    return category;
  };

  const initItems = (category) => {
    return setMenuItems('', category);
  };

  const cleanOrder = () => {
    setOrder([]);
    setTable(null);
  };

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
    const getData = async () => {
      const currentUser = auth.currentUser;
      const waitersData = await db.collection('users').doc(currentUser.uid).get();
      const waiterName = waitersData.data();
      setName(waiterName);
    }
    getData();
  }, []);

  let items = recommendations;
  const [order, setOrder] = useState([]);
  const [category, setCategory] = useReducer(setMenuItems, 'recommendations', initItems);
  const [table, setTable] = useState(null);
  const [name, setName] = useState([]);


  return (
    <div className="waiter-grid">
      <Menu
        addToOrder={addToOrder}
        items={items}
        category={category}
      ></Menu>
      <Table
        setTable={setTable}
        cleanOrder={cleanOrder}
        name={name}
      ></Table>
      <Order
        order={order}
        addToOrder={addToOrder}
        removeFromOrder={removeFromOrder}
        table={table}
        cleanOrder={cleanOrder}
        name={name}
      ></Order>
      <Navbar
        setCategory={setCategory}
      ></Navbar>
    </div>
  )
}

export default WaiterScreen;
