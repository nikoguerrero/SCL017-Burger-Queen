import React from 'react';
import './Modal.css';
import { db, auth, firebase } from '../../firebase';

const Modal = (props) => {
  const { show, onHide, order, totalOrder, table } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const confirmedOrder = order.map((item) => (
    <div key={item.id} className="food-items">
      {`${item.name}`}
      <div className="item-price">{item.qty > 1 ? item.qty + ' x ' : ''}{`$${item.price.toFixed(2)}`}</div>
    </div>
  ));

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
  }

  return (
    <div className={showHideClassName}>
      <div className="modal">
        <div className="modal-content">
          <div className="info-container">
            <h3 className="header">IS THE ORDER CORRECT?</h3>
            <div className="order-info">
              {confirmedOrder}
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
      </div>
    </div>
  )
}

export default Modal;