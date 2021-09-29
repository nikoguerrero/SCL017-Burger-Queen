import React, { Fragment, useState } from 'react';
import './Ticket.css';
import { db } from '../../firebase';
import { useEffect } from 'react/cjs/react.development';

const Tickets = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const orderStatus = db.collection('orders').where('status', '==', 'waiting');
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

  const changeStatus = async (e) => {
    const orderDoc = db.collection('orders').doc(e.target.id);
    const dataOrder = (await orderDoc.get()).data();
    if (dataOrder.status === 'waiting') {
      orderDoc.update({
        status: 'in progress'
      });
    } else if (dataOrder.status === 'in progress') {
      orderDoc.update({
        status: 'ready'
      })
    }
    console.log(dataOrder);
  }

  const ticketOrder = data.map((item) => (
    <section key={item.id} id={item.id} className="ticket-card">
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
      <button className="ticket-btn" id={item.id} onClick={(e) => changeStatus(e)}>START</button>
    </section>
  )); 
  
  return (
    <Fragment>
      <div className="order-tickets-container">
        <div className="tickets-wrapper">
          {ticketOrder}
        </div>
      </div>
    </Fragment>
  )
}

export default Tickets;