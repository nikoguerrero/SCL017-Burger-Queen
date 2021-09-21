import React from 'react';
import './Order.css';

const Order = () => {

  const orderItems = order.map((item) => (
    <div key={item.id}>
      {`${item.name}: $${item.price}`}
      <input type="submit" value="remove" onClick={() => removeFromOrder(item)} />
    </div>
  ));

  const removeFromOrder = (item) => {
    let hardCopy = [...order];
    hardCopy = hardCopy.filter((orderItem) => orderItem.id !== item.id);
    setOrder(hardCopy);
  };

  return (
    <div className="order-container">
      <div className="order">
        <div>ORDEN</div>
        <div>{orderItems}</div>
      </div>
    </div>
  )
};

export default Order;
export { setOrder } ;