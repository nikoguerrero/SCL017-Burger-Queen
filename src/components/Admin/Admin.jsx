import React, { Fragment, useState, useCallback } from 'react';
import {db, auth} from '../../firebase';
import './Admin.css';
import checkicon from '../Waiter/Modal/images/checkicon.png';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('admin');
  const [show, setShow] = useState(null);
  const showModal = () => setShow(true);

  const Register = useCallback(async(e) => {
    e.preventDefault();
    const res = await auth.createUserWithEmailAndPassword(email, pass);
    await db.collection('users').doc(res.user.uid).set({
        name: username,
        role: role,
        displayName: username,
        email: res.user.email,
        uid: res.user.uid,
        creationDate: Date.now(),
    });
    showModal();
    setEmail('');
    setPass('');
    setUsername('');
}, [email, pass, username, role]); 

const UserCreated = () => (
  <div className="modal">
    <div className="user-created-wrapper">
      <div className="icon-container">
        <img src={checkicon} alt="check-icon" className="confirmed-icon" />
      </div>
      <div className="text-container">
      USER CREATED
      </div>
      <div className="btn-container">
        <button className="btn-yes" onClick={() => setShow(false)}>
          CLOSE
        </button>
      </div>
    </div>
  </div>
);

  return (
    <Fragment>
      <section className="admin-grid">
        <div className="admin-form">
          <h1 className="title-admin">Add new user</h1>
            <form className="form-wrapper" onSubmit={Register}>
              <div className="inputs-container">
               <input 
                type="text" 
                placeholder="Username" 
                className="form-input user" 
                onChange={ (e) => setUsername(e.target.value)} 
                value={username}/>
              <input 
                type="email" 
                placeholder="Email" 
                className="form-input email" 
                onChange={ (e) => setEmail(e.target.value)} 
                value={email}/>
              <input 
                type="password" 
                placeholder="Password" 
                className="form-input password" 
                onChange={ (e) => setPass(e.target.value)} 
                value={pass}/>
              </div>
              <div className="radio-container">
                  <input
                  type="radio"
                  checked={role === "admin"}
                  value="admin"
                  onChange={(e) => setRole(e.target.value)}
                  />
                  <label>Admin</label>
                  <input
                  type="radio"
                  checked={role === "waiter"}
                  value="waiter"
                  onChange={(e) => setRole(e.target.value)}
                  />
                  <label>Waiter</label>
                  <input
                  type="radio"
                  checked={role === "cook"}
                  value="cook"
                  onChange={(e) => setRole(e.target.value)}
                  />
                  <label>Cook</label>
              </div>
                <button 
                  className="btn" 
                  type="submit">
                  SIGN UP
                </button>
              </form>
        </div>
      </section>
      {show ?  <UserCreated message={showModal}/> : null}
    </Fragment>
  );
};

export default Admin;