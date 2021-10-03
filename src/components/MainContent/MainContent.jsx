import React, { useState, useEffect } from 'react';
import title from './images/apptitle.png';
import Logout from '../Logout/Logout';
import '../Logout/Logout.css';
import { Link, useLocation } from 'react-router-dom';
import Routes from '../../Routes';
import './MainContent.css';
import { db } from '../../firebase';
import orderclock from './images/orderclock.png';
import menuicon from './images/menuicon.png';

const MainContent = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('all orders');
  const [menu, setMenu] = useState(null);
  let location = useLocation().pathname;

  useEffect(() => {
    const orderCollection = db.collection('orders').orderBy('orderDate', 'desc');
    const unsuscribe = orderCollection.onSnapshot(snapshot => {
      const array = [];
      snapshot.forEach(doc => {
        const element = doc.data();
        const id = doc.id;
        array.push({...element, id});
      })
      setData(array);
    });
    return () => unsuscribe;
  }, []);

  useEffect(() => {
    fetch('menu.json')
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);

  return menu != null ? (
    <div className="general-grid">
      <div className="header-main">
       <Logout />
        <div className="image-container">
          <img src={ title } alt="app name" className="img-title"></img>
        </div>
        {location === "/menu" ?
        <Link to="/serve" className="link-to-btn">
          <img src={ orderclock } alt="order icon" className="orders-ready"/>
        </Link>
        : null }
        {location === "/serve" ?
        <Link to="/menu" className="link-to-btn">
          <img src={menuicon} className="orders-ready"/>
        </Link>
        : null }
      </div>
      <Routes 
      data={data}
      setData={setData}
      status={status}
      setStatus={setStatus}
      menu={menu}
      />
    </div>
  ) : ( <p>LOADING</p> )
};

export default MainContent;