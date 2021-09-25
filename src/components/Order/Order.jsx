import React, { useState } from 'react';
import './Order.css';
import Modal from '../Modal/Modal';

export default function Order(props) {
  const { order, removeFromOrder, table } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const totalValue = order.reduce((total, value) => total + value.qty * value.price, 0);
  const totalOrder = totalValue.toFixed(2);

  const orderItems = order.map((item) => (
    <div key={item.id} className="food-items">
      <input type="submit" value="X" onMouseUp={() => removeFromOrder(item)} className="remove-btn"/>{`${item.name}`}
      <div className="item-price">{item.qty > 1 ? item.qty + ' x ' : ''}{`$${item.price.toFixed(2)}`}</div>
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
        <button className="send-btn" onClick={handleShow}>SEND TO KITCHEN</button>
        {show ? 
        <Modal onHide={handleClose} order={order} totalOrder={totalOrder} table={table}>
        </Modal>
        : null}
    </div>
  )
};
