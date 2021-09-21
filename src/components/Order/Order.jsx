import React from 'react';

const Order = () => {
  const { order, addToOrder, removeFromOrder } = props;

  const orderItems = order.map((item) => (
    <div key={item.id}>
      {`${item.name}: $${item.price}`}
      <input type="submit" value="remove" onClick={() => removeFromOrder(item)} />
    </div>
  ));

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