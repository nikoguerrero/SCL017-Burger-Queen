import React, { Fragment, useState, useCallback } from 'react';
import {db, auth} from '../../firebase';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('admin');

  const [error, setError] = useState(null);

  const Register = useCallback(async(e) => {
    console.log(role);
    e.preventDefault();
    // try {
        const res = await auth.createUserWithEmailAndPassword(email, pass)
        console.log(res.user)
        
        await db.collection('users').doc(res.user.uid).set({
            name: username,
            role: role,
            displayName: username,
            email: res.user.email,
            uid: res.user.uid,
            creationDate: Date.now(),
        });
}, [email, pass, username, role]); 



  return (
    <Fragment>
      <div className="form-grid">
        ADD NEW USER
          <form className="form-container" onSubmit={Register}>
            <label>
              Name
              <input 
                type="text" 
                className="form-input user" 
                onChange={ (e) => setUsername(e.target.value)} 
                value={username}/>
            </label>
            <label>
              Email
              <input 
                type="email" 
                placeholder="Email" 
                className="form-input user" 
                onChange={ (e) => setEmail(e.target.value)} 
                value={email}/>
            </label>
            <label>
              Password
              <input 
                type="password" 
                placeholder="Password" 
                className="form-input password" 
                onChange={ (e) => setPass(e.target.value)} 
                value={pass}/>
            </label>
            <div className="checkbox-container">
              <h1>Radio button is: {role} </h1>
              <div className="checkbox-wrapper">
                <label>
                  Admin
                </label>
                  <input
                  type="radio"
                  checked={role === "admin"}
                  value="admin"
                  onChange={(e) => setRole(e.target.value)}
                  />
                <label>
                  Waiter
                </label>
                  <input
                  type="radio"
                  checked={role === "waiter"}
                  value="waiter"
                  onChange={(e) => setRole(e.target.value)}
                  />
                <label>
                  Cook
                </label>
                  <input
                  type="radio"
                  checked={role === "cook"}
                  value="cook"
                  onChange={(e) => setRole(e.target.value)}
                  />
              </div>
            </div>
              <button 
                className="btn" 
                type="submit"
                >SIGN UP</button>
            </form>
          <div className="sections-menu">
            <Link to="/menu">
              <button className="waiter-btn">
                WAITER MENU
              </button>
            </Link>
            <Link to="/kitchen">
              <button className="waiter-btn">
                KITCHEN
              </button>
            </Link>
          </div>
      </div>
    </Fragment>
  );
};

export default Admin;