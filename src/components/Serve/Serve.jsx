import React, { Fragment } from 'react';
import KitchenBar from '../Cook/KitchenBar/KitchenBar';
// import TicketItem from '../Cook/Tickets/TicketItem';
import ServeItem from '../Serve/ServeItem';
import { db } from '../../firebase';

const Serve = (props) => {
  const { data, status, setStatus } = props;
  let filteredData = data;

  const changeStatus = async (e) => {
    const orderDoc = db.collection('orders').doc(e.target.id);
    const dataOrder = (await orderDoc.get()).data();
    if (dataOrder.status === 2) {
      orderDoc.update({
        status: 3
      });
    } else if (dataOrder.status === 3) {
      orderDoc.update({
        status: 4
      });
    }
  };

  console.log(status)

  switch (status) {
    case 'new':
      filteredData = data.filter((item) => item.status === 3);
      break;
    case 'done':
      filteredData = data.filter((item) => item.status === 4);
      break;
    default:
      filteredData = data.filter((item) => item.status > 2);
      break;
  }
  
  return (
    <Fragment>
      <div className="order-tickets-container">
        <div className="tickets-wrapper">
          {filteredData.map((item) => 
          <ServeItem
          item={item}
          changeStatus={changeStatus}
          key={item.id}
          />)}
        </div>
      </div>
      <KitchenBar
        setStatus={setStatus}
      />
    </Fragment>
  );
};

export default Serve;