import React from 'react';
import './Modal.css';

const Modal = ({ show, onHide }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal">
        <div className="modal-content">
        <div className="header"></div>
          <div className="info-container">
            <div className="order-info">HOLA HOLA</div>
          </div>
          <div className="footer">
            <button className="btn-no" onClick={onHide}>
              NO
            </button>
            <button className="btn-yes">
              YES
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;