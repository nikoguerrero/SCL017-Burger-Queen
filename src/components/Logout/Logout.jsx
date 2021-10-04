import React, { Fragment, useState } from 'react';
import './Logout.css';
import logoutImg from './images/logoutred.png'; 
import { auth } from '../../firebase';
import { withRouter } from 'react-router-dom';

const Logout = (props) => {
  const [message, setMessage] = useState(null);
  const showModal = () => setMessage(true);
  const onSignOut = () => {
    auth.signOut()
        .then(() => {
            props.history.push('/');
        });
  }

  const AlertLogout = () => (
    <div className="modal">
      <div className="alert-container">
        <div className="message-text">
        ARE YOU SURE YOU WANT TO LOG OUT?
        </div>
        <div className="btn-container">
          <button className="btn-no" onClick={() => setMessage(false)}>
            NO
          </button>
          <button className="btn-yes" onClick={() => onSignOut()}>
            YES
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
        <img src= { logoutImg } alt="logout icon" className="logout-btn" onClick={() => showModal()}></img>
      {message ?  <AlertLogout message={showModal}/> : null}
    </Fragment>
  )
};

export default withRouter(Logout);
