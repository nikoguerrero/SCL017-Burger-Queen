import React, { useState } from 'react';
import title from './images/apptitle.png';
import Logout from '../Logout/Logout';
import '../Logout/Logout.css';
import { Link } from 'react-router-dom';
import Routes from '../../Routes';
import './MainContent.css';
import { db } from '../../firebase';

const MainContent = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('all orders');

  const fetchData = (kitchenOrder) => {
    const orderStatus = kitchenOrder;
    orderStatus.onSnapshot(snapshot => {
      const array = [];
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        //console.log(change.type);
        if (change.type === 'added') {
          const element = change.doc.data();
          const id = change.doc.id;
          array.push({...element, id});
        }
      });
      setData(array);
    });
  };

  const getData = async () => {
    const orderStatus = db.collection('orders').where('status', '==', 3);
    const orderData = await orderStatus.get();
    const array = [];
    for (const doc of orderData.docs) {
      const element = doc.data();
      const id = doc.id;
      array.push({...element, id});
    }
    setData(array);
  };

  return (
    <div className="general-grid">
      <div className="header">
        <div className="image-container">
          <img src= { title } alt="app name" className="img-title"></img>
        </div>
        <Link to="/serve" className="link-to-btn">
          <button className="orders-ready" onClick={getData}>ORDERS READY</button>
        </Link>
        <Link to="/menu" className="link-to-btn">
          <button className="orders-ready">BACK</button>
        </Link>
        <Logout />
      </div>
      <Routes 
      data={data}
      fetchData={fetchData}
      setData={setData}
      status={status}
      setStatus={setStatus}
      />
    </div>
  )
};

export default MainContent;