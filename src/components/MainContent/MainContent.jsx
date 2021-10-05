import React, { useState, useEffect } from 'react';
import title from './images/apptitle.png';
import Logout from '../Logout/Logout';
import '../Logout/Logout.css';
import { Link, useLocation } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import './MainContent.css';
import { db, auth } from '../../firebase';
import serveicon from './images/serveicon.png';
import menuicon from './images/menuicon.png';
import kitchenicon from './images/kitchenicon.png';
import adminicon from './images/adminicon.png';
import Loading from '../Loading/Loading';

const MainContent = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('all orders');
  const [menu, setMenu] = useState(null);
  const [userData, setUserData] = useState(null);
  const location = useLocation().pathname;

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
    const getData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser !== null) {
        const userCollection = await db.collection('users').doc(currentUser.uid).get();
        const userDoc = userCollection.data();
        setUserData(userDoc);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    fetch('menu.json')
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);

  return menu && userData != null ? (
    <div className="general-grid">
      <div className="header-main">
        <div className="left-side">
          <Logout />
          <img src={ title } alt="app name" className="img-title"></img>
        </div>
        <div className="links-container">
          { userData.role === "admin" && location !== "/admin" ?
          <Link to="/admin">
            <img src={ adminicon } alt="admin icon" className="link-icon"/>
          </Link>
          : null }
          { userData.role === "admin" ? 
          <Link to="/kitchen">
            <img src={ kitchenicon } alt="kitchen icon" className="link-icon"/>
          </Link>
          : null }
          { userData.role === "admin" || location === "/serve" ?
          <Link to="/menu">
            <img src={ menuicon } alt="menu icon" className="link-icon"/>
          </Link>
          : null }
          { userData.role === "admin" || location === "/menu" ?
          <Link to="/serve">
            <img src={ serveicon } alt="order icon" className="link-icon"/>
          </Link>
          : null }
        </div>
      </div>
      <MainRoutes 
      data={data}
      setData={setData}
      status={status}
      setStatus={setStatus}
      menu={menu}
      userData={userData}
      />
    </div>
  ) : ( 
    <Loading />
  )
};

export default MainContent;