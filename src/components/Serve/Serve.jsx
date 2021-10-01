import React, { Fragment } from 'react';
import KitchenBar from '../Cook/KitchenBar/KitchenBar';
// import '../Cook/Tickets/Tickets.css';

const Serve = (props) => {
  const { data, setStatus } = props;
  
  const ticketOrder = data.map((item) => (
    <section key={item.id} id={item.id} className="ticket-card">
      <div className="order-data">
        <ul className="right-data">
          <div className="table-number-order">{item.tableNumber.toUpperCase()}</div>
          <div>{item.waiterName}</div>s
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
        id={item.id}>
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