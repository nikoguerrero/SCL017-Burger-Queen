import React from 'react';

const TicketItem = (props) => {
  const { item, changeStatus } = props;
  const statusNames = [
    { name: 'START', btnClass: '', orderClass: ''} ,
    { name: 'READY!', btnClass: '', orderClass: 'order-data-active' },
    { name: 'READY!', btnClass: 'ticket-btn-deactivated', orderClass: 'order-data-ready'},
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
          <div className="waiter-info">{item.waiterName}</div>
        </ul>
        <div className="time-info">{item.orderDate.toDate().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}hrs</div>
      </div>
      <div className="center-container">
        <div className="ticket-elements">
        {item.orderItems.map((order) => (
          <ul key={order.id} className="items-list">
            <li>{order.qty} x {order.name}</li>
          </ul>
        ))}
        </div>
        {item.orderItems.length > 7 ?
        <div className="more-items">More items...</div>
        : null}
      </div>
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

export default TicketItem;