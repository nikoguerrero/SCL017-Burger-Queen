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

  const ticketOrder = data.map((item) => (
    <section key={item.id} className="ticket-card">
      <div className="order-data">
        <ul className="right-data">
          <div className="table-number-order">{item.tableNumber.toUpperCase()}</div>
          <div>{item.waiterName}</div>
        </ul>
        <div>{item.orderDate.toDate().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}hrs</div>
      </div>
      {item.orderItems.map((order) => (
        <ul key={order.id} className="items-list">
          <li>{order.qty} x {order.name}</li>
        </ul>
      ))}
      <button className="ticket-btn">START</button>
    </section>
  )); 
  
  return (
    <Fragment>
      <div className="order-tickets-container">
        {ticketOrder}
      </div>
    </Fragment>
  )
}

export default Tickets;