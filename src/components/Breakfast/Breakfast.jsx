import React from 'react';
import Menu from '../../menu.json';
import './Breakfast.css';
import Main from './Main';
// import Order from './Order';

const Breakfast = (props) => {
  const { addToOrder } = props;
  const items = Menu.breakfast;

  // const breakfastItems = Menu.breakfast.map((item) => (
  //   <button className="food-btn"  key={item.id}  onClick={() => addToOrder(item)}>
  //   <img src={item.image} alt="food"></img>
  //   <div> {item.name}</div>
  //   <div> $ {item.price}</div>
  // </button>
  // ));

  return(
    <div className="breakfast-container">
      <div className="breakfast-box">
        <p className="text-hour">
          From 8AM to 11AM
        </p>
        <div className="breakfast-grid">
          <Main items={items} addToOrder={addToOrder}></Main>
          {/* {breakfastItems}
        </div>
        <div className="order">
          <div>ORDEN</div>
          <div>{orderItems}</div> */}
        </div>
      </div>
    </div>
  )
};

export default Breakfast;