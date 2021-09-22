import React from 'react';
import './Order.css';

export default function Order(props) {
  const { order, removeFromOrder } = props;
  const totalValue = order.reduce((total, { price = 0 }) => total + price, 0);
  const totalOrder = totalValue.toFixed(2);

  const orderItems = order.map((item) => (
    <div key={item.id} className="food-items">
      <input type="submit" value="X" onClick={() => removeFromOrder(item)} className="remove-btn"/>{`${item.name}`}
      <div className="item-price">{`$${item.price.toFixed(2)}`}</div>
    </div>
  ));

  return (
    <div className="order-container">
      <div className="order">
        <div className="title-order">
          <div className="title-text">New Order</div>
          <span className="line"></span>
        </div>
        <div className="order-items">{orderItems}</div>
        <div className="total-order">
          <span className="line"></span>
          <div className="total-price">
            <div className="total-text">TOTAL</div> 
            ${totalOrder}</div>
          </div>
        </div>
    </div>
  )
};
