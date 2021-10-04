import React, { Fragment } from 'react';
import TicketItem from '../Cook/Tickets/TicketItem';

const ServeItem = (props) => {
  const { item, changeStatus } = props;
  const statusNames = [
    { name: 'START', btnClass: '', orderClass: ''} ,
    { name: 'READY!', btnClass: '', orderClass: 'order-data-active' },
    { name: 'DELIVER', btnClass: '', orderClass: ''},
    { name: 'DELIVERED', btnClass: 'ticket-btn-deactivated', orderClass: 'order-data-ready'}
  ];

  return (
    <Fragment>
      <TicketItem 
        item={item}
        changeStatus={changeStatus}
        statusNames={statusNames}
      />
    </Fragment>
  );
};

export default ServeItem;