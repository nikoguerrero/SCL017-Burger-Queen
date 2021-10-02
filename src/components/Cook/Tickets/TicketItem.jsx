import React from 'react';

const TicketItem = (props) => {
  const { item, changeStatus } = props;
  return (
    <section id={item.id} className="ticket-card">
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
        onClick={(e) => changeStatus(e, item)}
      >
        START
      </button>
    </section>
  )

};

export default TicketItem;