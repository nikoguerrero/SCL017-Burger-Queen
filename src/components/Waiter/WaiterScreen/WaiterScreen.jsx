import React, { useState, useReducer, useEffect } from 'react';
import './WaiterScreen.css'
import Order from '../Order/Order';
import Table from '../Table/Table';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import { db, auth } from '../../../firebase';

const WaiterScreen = (props) => {
  const { menu } = props;
  const setMenuItems = (oldCategory, category) => {
    switch (category) {
      case 'recommendations': {
        const recommendations = [];
        for (const recommendation of menu.recommendations) {
          recommendations.push(menu[recommendation.menuName][recommendation.index]);
        }
        setItems(recommendations);
      
        break;
      }
      default:
        setItems(menu[category]);
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
      if (currentUser !== null) {
        const waitersData = await db.collection('users').doc(currentUser.uid).get();
        const waiterName = waitersData.data();
        setName(waiterName);
      }
    }
    getData();
  }, []);

  const [items, setItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [category, setCategory] = useReducer(setMenuItems, 'recommendations', initItems);
  const [table, setTable] = useState(null);
  const [name, setName] = useState([]);

  useEffect(() => {
    setCategory('recommendations');
  }, [menu]);


  return (
    <div className="waiter-grid">
      <Menu
        addToOrder={addToOrder}
        items={items}
        category={category}
      />
      <Table
        setTable={setTable}
        cleanOrder={cleanOrder}
        name={name}
      />
      <Order
        order={order}
        addToOrder={addToOrder}
        removeFromOrder={removeFromOrder}
        table={table}
        cleanOrder={cleanOrder}
        name={name}
      />
      <Navbar
        setCategory={setCategory}
      />
    </div>
  )
}

export default WaiterScreen;
