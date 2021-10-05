import React, { Fragment } from 'react';
import KitchenBar from '../../Cook/KitchenBar/KitchenBar';
import ServeItem from '../Serve/ServeItem';
import { db } from '../../../firebase';

const Serve = (props) => {
  const { data, status, setStatus, userData } = props;
  let filteredData = data;

  const changeStatus = async (e) => {
    const orderDoc = db.collection('orders').doc(e.target.id);
    const dataOrder = (await orderDoc.get()).data();
    if (dataOrder.status === 2) {
      orderDoc.update({
        status: 3
      });
    }
  };

  

  if (userData.role === 'admin') {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
    switch (status) {
      case 'new':
        filteredData = data.filter((item) => item.status === 2);
        
        break;
      case 'done':
        filteredData = data.filter((item) => item.status === 3);
        break;
      default:
        filteredData = data.filter((item) => item.status > 1);
        break;
    }
  } else {
    switch (status) {
      case 'new':
        filteredData = data.filter((item) => item.status === 2 && item.waiterId === userData.uid);
        break;
      case 'done':
        filteredData = data.filter((item) => item.status === 3 && item.waiterId === userData.uid);
        break;
      default:
        filteredData = data.filter((item) => item.status > 1 && item.waiterId === userData.uid);
        break;
    }
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