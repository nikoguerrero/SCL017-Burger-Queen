import React, { useState } from 'react';
import title from './images/apptitle.png';
import Logout from '../Logout/Logout';
import '../Logout/Logout.css';
import { Link } from 'react-router-dom';
import Routes from '../../Routes';
import './MainContent.css';

const MainContent = () => {
  const [data, setData] = useState([]);

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

  return (
    <div className="general-grid">
      <div className="header">
        <div className="image-container">
          <img src= { title } alt="app name" className="img-title"></img>
        </div>
        <Link to="/serve" className="link-to-btn">
          <button className="orders-ready">ORDERS READY</button>
        </Link>
        <Link to="/menu" className="link-to-btn">
          <button className="orders-ready">BACK</button>
        </Link>
        <Logout />
      </div>
      <Routes 
      data={data}
      fetchData={fetchData}
      />
    </div>
  )
};

export default MainContent;