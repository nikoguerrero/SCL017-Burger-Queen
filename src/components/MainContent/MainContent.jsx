import React from 'react';
import title from './images/apptitle.png';
import Logout from '../Logout/Logout';
import '../Logout/Logout.css';
import { Link } from 'react-router-dom';
import Routes from '../../Routes';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="general-grid">
      <div className="header">
        <div className="image-container">
          <img src= { title } alt="app name" className="img-title"></img>
        </div>
        <Link to="/serve" className="link-to-btn">
          <button className="orders-ready">ORDERS READY</button>
        </Link>
        <Logout />
      </div>
      <Routes />
    </div>
  )
};

export default MainContent;