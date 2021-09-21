import React from 'react';
import Items from './Items';
import './Breakfast.css';

export default function Main(props) {
  const { items, addToOrder } = props;
  return (
    <main className="breakfast-grid">
        {items.map((item) => (
          <Items key={item.id} item={item} addToOrder={addToOrder}></Items>
        ))}
    </main>
  );
}