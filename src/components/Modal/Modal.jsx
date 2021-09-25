import React, { useState } from 'react';
import './Modal.css';
import { db, auth, firebase } from '../../firebase';
import checkicon from './images/checkicon.png';  

const Modal = (props) => {
  const { onHide, order, totalOrder, table } = props;
  const [showOrder, setShowOrder] = useState(true);
  const [showSent, setShowSent] = useState(false);

  const sendOrder = async (order) => {
    const orderSent = order.map((item) => {
      const { id, name, qty } = item;
      return { id, name, qty };
    });
    const waiterId = auth.currentUser.uid;
    const orderDate = firebase.firestore.FieldValue.serverTimestamp();
    await db.collection('orders').add({
      waiterId,
      orderDate,
      orderNumber: 1,
      tableNumber: table.value,
      orderItems: orderSent,
      totalOrder: totalOrder,
      status: 'Waiting'
    });
    setShowOrder(false);
    setShowSent(true);
  }

  const OrderSent = () => 
    <div className="confirmed-wrapper">
      <div className="icon-container">
        <img src={checkicon} alt="check-icon" className="confirmed-icon" />
      </div>
      <div className="text-container">
        YOUR ORDER HAS BEEN SENT TO THE KITCHEN
      </div>
      <button className="close-modal-btn" onClick={onHide}>
        CLOSE
      </button>
    </div>;

  const OrderConfirmation = () => 
    <div className="modal-wrapper">
      <div className="info-container">
        <h3 className="header">IS THE ORDER CORRECT?</h3>
        <div className="order-info">
          {order.map((item) => (
            <div key={item.id} className="food-items">
              {`${item.name}`}
              <div className="item-price">
                {item.qty > 1 ? item.qty + ' x ' : ''}
                {`$${item.price.toFixed(2)}`}
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <div className="total-info">TOTAL</div> 
          <div className="total-number">${totalOrder}</div> 
        </div>
      </div>
      <div className="footer">
        <button className="btn-no" onClick={onHide}>
          NO
        </button>
        <button className="btn-yes" onClick={() => sendOrder(order)}>
          YES
        </button>
      </div>
    </div>
  ;

  return (
    <div className="modal">
      <div className="modal-content">
      {showOrder ? <OrderConfirmation/>: null}
      {showSent ? <OrderSent/>: null}
      </div>
    </div>
  )
}

export default Modal;