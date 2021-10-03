import React from 'react';
import './Menu.css';

export default function Items(props) {
  const { items, addToOrder } = props;
  const menuItems = items.map((item) => (
    <button key={item.id} className="food-btn" onMouseUp={() => addToOrder(item) }>
    <img src={item.image} alt="food"></img>
    <div> {item.name}</div>
    <div> $ {item.price.toFixed(2)}</div>
  </button>
  ));

  return (
    <main className="menu-grid">
        {items && items.length > 0 && menuItems}
    </main>
  );
}
