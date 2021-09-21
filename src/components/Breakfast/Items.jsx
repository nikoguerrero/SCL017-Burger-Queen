import React from 'react';

export default function Items(props) {
  const { item, addToOrder } = props;

  return (
    <div>
      <button className="food-btn" onClick={() => addToOrder(item)}>
        <img src={item.image} alt="food"></img>
        <div> {item.name}</div>
        <div> $ {item.price}</div>
      </button>
    </div>
  );
}