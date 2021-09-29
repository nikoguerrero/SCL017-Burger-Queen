import React, { Fragment, useState } from 'react';
import './Ticket.css';
import { db } from '../../firebase';
import { useEffect } from 'react/cjs/react.development';

const Tickets = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const orderStatus = db.collection('orders').where('status', '==', 'Waiting');
      const orderData = await orderStatus.get();
      const array = [];
      for (const doc of orderData.docs) {
        // console.log(doc.id, '=>', doc.data());
        const element = doc.data();
        const id = doc.id;
        array.push({...element, id});
        console.log(element)
      }
      setData(array);
    }
    fetchData();
  }, []);

  const listItems = data.map((item) => (
    <div key={item.id}>
      <ul>
        <li>{item.orderDate.toDate().toLocaleTimeString()}</li>
        <li>{item.tableNumber}</li>
      </ul>
      {item.orderItems.map((order) => (
        <ul key={order.id}>
          <li>{order.name}</li>
          <li>{order.qty}</li>
        </ul>
      ))}
    </div>
  )); 
  
  return (
    <Fragment>
      <div className="order-tickets-container">
        {listItems}
      </div>
    </Fragment>
  )
}

export default Tickets;