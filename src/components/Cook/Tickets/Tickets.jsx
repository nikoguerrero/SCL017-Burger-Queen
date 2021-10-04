import React, { Fragment } from 'react';
import './Tickets.css';
import { db } from '../../../firebase';
import TicketItem from './TicketItem';

const Tickets = (props) => {
  const { data } = props;
  const statusNames = [
    { name: 'START', btnClass: '', orderClass: ''} ,
    { name: 'READY!', btnClass: '', orderClass: 'order-data-active' },
    { name: 'READY!', btnClass: 'ticket-btn-deactivated', orderClass: 'order-data-ready'},
    { name: 'DELIVER', btnClass: '', orderClass: ''},
    { name: 'DELIVERED', btnClass: 'ticket-btn-deactivated', orderClass: 'order-data-ready'}
  ];

  const changeStatus = async (e) => {
    const orderDoc = db.collection('orders').doc(e.target.id);
    const dataOrder = (await orderDoc.get()).data();
    if (dataOrder.status === 0) {
      orderDoc.update({
        status: 1
      });
    } else if (dataOrder.status === 1) {
      orderDoc.update({
        status: 2
      });
    }
  };

  return (
    <Fragment>
      <div className="order-tickets-container">
        <div className="tickets-wrapper">
          {data.map((item) => 
          <TicketItem 
          item={item}
          changeStatus={changeStatus}
          key={item.id}
          statusNames={statusNames}
          />)}
        </div>
      </div>
    </Fragment>
  )
}

export default Tickets;