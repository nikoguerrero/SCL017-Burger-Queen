import React, { Fragment } from 'react';
import KitchenBar from '../Cook/KitchenBar/KitchenBar';
import { db } from '../../firebase';

const Serve = (props) => {
  const { data, setStatus } = props;

  const changeStatus = async (e) => {
    const orderDoc = db.collection('orders').doc(e.target.id);
    const dataOrder = (await orderDoc.get()).data();
    if (dataOrder.status === 3) {
      orderDoc.update({
        status: 4
      });
    } else if (dataOrder.status === 2) {
      orderDoc.update({
        status: 3
      });
    }
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
      <button 
        className="ticket-btn" 
        id={item.id}
        onClick={(e) => changeStatus(e)}
        >
        DELIVER
      </button>
    </section>
  )); 
  
  return (
    <Fragment>
      <div className="order-tickets-container">
        <div className="tickets-wrapper">
          {ticketOrder}
        </div>
      </div>
      <KitchenBar
        setStatus={setStatus}
      />
    </Fragment>
  );
};

export default Serve;