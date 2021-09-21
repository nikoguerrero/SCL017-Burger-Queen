import React from 'react';
import './Order.css';

export default function Order(props) {
  const { order, removeFromOrder } = props;
  const orderTotal = order.reduce((total, { price = 0 }) => total + price, 0);

  const orderItems = order.map((item) => (
    <div key={item.id} className="order-items">
      <input type="submit" value="X" onClick={() => removeFromOrder(item)} className="remove-btn"/>
      {`${item.name}: $${item.price}`}
    </div>
  ));

  return (
    <div className="order-container">
      <div className="order">
        <div className="title-order">New Order</div>
        <span className="line"></span>
        <div>{orderItems}</div>
        <div className="total-price">Total: ${orderTotal}</div>
      </div>
    </div>
  )
};
