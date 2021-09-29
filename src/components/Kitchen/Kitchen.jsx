import React, { useState, useEffect } from 'react';
import './Kitchen.css';
import title from '../WaiterScreen/images/apptitle.png';
import Logout from '../Logout/Logout';
import '../Logout/Logout.css';
import KitchenBar from '../KitchenBar/KitchenBar';
import Tickets from '../Tickets/Tickets';
import { db } from '../../firebase';

const Kitchen = (props) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('all orders');

  const fetchData = async (x) => {
    const orderStatus = x;
    const orderData = await orderStatus.get();
    const array = [];
    for (const doc of orderData.docs) {
      // console.log(doc.id, '=>', doc.data());
      const element = doc.data();
      const id = doc.id;
      array.push({...element, id});
    }
    setData(array);
  };

  useEffect(() => {
    console.log(status)
    switch (status) {
      case 'all orders':
        fetchData(db.collection('orders'));
      break;
      case 'new':
        fetchData(db.collection('orders').where('status', '==', 'waiting'));
      break;
      case 'active':
        fetchData(db.collection('orders').where('status', '==', 'in progress'));
      break;
      case 'done':
        fetchData(db.collection('orders').where('status', '==', 'ready'));
      break;
      default:
        fetchData(db.collection('orders'));
      break;
    }
  }, [status]);
  
  return (
    <div className="kitchen-grid">
      <div className="image-container">
        <img src={ title } alt="namitowntitle" className="img-title"/>
      </div>
      <Logout />
      <Tickets
      data={data}
      status={status}
      />
      <KitchenBar 
      setStatus={setStatus}
      />
    </div>
  )
}

export default Kitchen;