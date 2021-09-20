import React from 'react';
import Menu from '../../menu.json';
import './Breakfast.css';
// import { db } from '.././firebase';

// const menuData = async () => {
//   const menu = await db.collection('menu-breakfast').doc('black-tea').get();
//   const blackTea = menu.data();
//   const Tea = blackTea.name;
//   console.log(Tea);
// };

const Breakfast = () => {

  // menuData();
  return(
    <div className="breakfast-container">
      <div className="breakfast-box">
        <p className="text-hour">
          From 8AM to 11AM
        </p>
        <div className="breakfast-grid">
          {Menu.breakfast.map((item) => (
            <button className="food-btn">
            <img src={item.image} alt="food"></img>
            <div> {item.name}</div>
            <div> $ {item.price}</div>
          </button>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Breakfast;