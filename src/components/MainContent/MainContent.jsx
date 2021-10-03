import React, { useState, useEffect } from 'react';
import title from './images/apptitle.png';
import Logout from '../Logout/Logout';
import '../Logout/Logout.css';
import { Link, useLocation } from 'react-router-dom';
import Routes from '../../Routes';
import './MainContent.css';
import { db, auth } from '../../firebase';
import serveicon from './images/serveicon.png';
import menuicon from './images/menuicon.png';
import kitchenicon from './images/kitchenicon.png';

const MainContent = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('all orders');
  const [menu, setMenu] = useState(null);
  const [userData, setUserData] = useState(null);
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

  useEffect(() => {
    const getData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser !== null) {
        const waitersData = await db.collection('users').doc(currentUser.uid).get();
        const waiterName = waitersData.data();
        setUserData(waiterName);
      }
    }
    getData();
  }, []);

  return menu && userData != null ? (
    <div className="general-grid">
      <div className="header-main">
       <Logout />
        <div className="image-container">
          <img src={ title } alt="app name" className="img-title"></img>
        </div>
        {location === "/menu" ?
        <Link to="/serve" className="link-to-btn">
          <img src={ serveicon } alt="order icon" className="orders-ready"/>
        </Link>
        : null }
        {location === "/serve" || location === "/admin" ?
        <Link to="/menu" className="link-to-btn">
          <img src={ menuicon } alt="menu icon" className="orders-ready"/>
        </Link>
        : null }
        {location === "/admin" ?
        <Link to="/kitchen" className="link-to-btn">
          <img src={ kitchenicon } alt="kitchen icon" className="kitchen-icon"/>
        </Link>
        : null }
      </div>
      <Routes 
      data={data}
      setData={setData}
      status={status}
      setStatus={setStatus}
      menu={menu}
      userData={userData}
      />
    </div>
  ) : ( <p>LOADING</p> )
};

export default MainContent;