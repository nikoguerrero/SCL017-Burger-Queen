import React from 'react';

const ServeItem = (props) => {
  const { item, changeStatus } = props;
  const statusNames = [
    { name: 'A', btnClass: '', orderClass: ''} ,
    { name: 'B!', btnClass: '', orderClass: 'order-data-active' },
    { name: 'DELIVER', btnClass: '', orderClass: ''},
    { name: 'DELIVERED', btnClass: 'ticket-btn-deactivated', orderClass: 'order-data-ready'}
  ];

  const currentStatus = statusNames[item.status];
  const orderClassName = `order-data ${currentStatus.orderClass}`;
  const buttonClassName = `ticket-btn ${currentStatus.btnClass}`;
  
  return (
    <section id={item.id} className="ticket-card">
      <div className={orderClassName}>
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
        className={buttonClassName}
        id={item.id} 
        onClick={(e) => changeStatus(e, item)}
      >
        {currentStatus.name}
      </button>
    </section>
  );
};

export default ServeItem;