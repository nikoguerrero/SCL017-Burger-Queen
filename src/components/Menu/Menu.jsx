import React from 'react';
import './Menu.css'
import title from './images/apptitle.png'; 

export default function Menu() {
  return (
    <div className="menu-grid">
      <img src= { title } alt="app name" className="img-title"></img>
    </div>
  )
}
