import React from 'react';
import './Breakfast.css';

export default function Main(props) {
  const { items, addToOrder } = props;
  const menuItems = items.map((item) => (
    <button key={item.id} className="food-btn" onClick={() => addToOrder(item)}>
    <img src={item.image} alt="food"></img>
    <div> {item.name}</div>
    <div> $ {item.price.toFixed(2)}</div>
  </button>
  ));

  return (
    <main className="breakfast-grid">
        {menuItems}
    </main>
  );
}
