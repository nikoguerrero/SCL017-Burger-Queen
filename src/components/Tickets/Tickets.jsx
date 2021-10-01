import React, { Fragment, useState } from 'react';
import './Ticket.css';
import { db } from '../../firebase';

const Tickets = (props) => {
  const { data } = props;
  const [selected, setSelected] = useState(0)
  const [buttonText, setButtonText] = useState('START');
  // const [state, setState] = useState({
  //   text: 'START',
  //   color: 'blue'
  // });

  const changeStatus = async (e, column) => {
    const orderDoc = db.collection('orders').doc(e.target.id);
    const dataOrder = (await orderDoc.get()).data();
    if (dataOrder.status === 1) {
      orderDoc.update({
        status: 2
      });
      // setButtonText('READY!')
      if (e.target.id === column.id) {
        setButtonText('READY!');
      }
    } else if (dataOrder.status === 2) {
      orderDoc.update({
        status: 3
      });
    } else if (dataOrder.status === 3) {
      setSelected(column.id);
    }
  }
  console.log(data);
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
        onClick={(e) => changeStatus(e, item)}
        style={{ backgroundColor: item.id === selected ? "#CDCDCD": "" }}
      >
        {buttonText}
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
    </Fragment>
  )
}

export default Tickets;