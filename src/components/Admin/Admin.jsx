import React, { Fragment, useState, useCallback } from 'react';
import {db, auth} from '../../firebase';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [username, setUsername] = useState('');
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.name);
  }
  const [error, setError] = useState(null);
  console.log(checked);

  const Register = useCallback(async(e) => {
    e.preventDefault();
    try {
        const res = await auth.createUserWithEmailAndPassword(email, pass)
        console.log(res.user)
        // console.log(role)
        await db.collection('usersData').doc(res.user.uid).set({
            creationDate: Date.now(),
            displayName: username,
            email: res.user.email,
            uid: res.user.uid,
            // username: username,
            // role: role
        });

        // setEmail('')
        // setPass('')
        // setError(null)
        // props.history.push('/admin') 
    } catch (error) {
        console.log(error)
        if(error.code === 'auth/email-already-in-use'){
            setError('User already registered');
            return;
        }
        if(error.code === 'auth/invalid-email'){
            setError('Invalid email');
            return;
        }
    }
}, [email, pass, username]); 



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
            ROLE
            <div className="checkbox-wrapper">
              <label>
                Waiter
                <input
                name="waiter"
                type="checkbox"
                checked={checked}
                // onChange={(e) => setChecked(e.target.name)}
                onChange={handleChange}
                />
              </label>
              <label>
                Cook
                <input
                name="cook"
                type="checkbox"
                checked={checked}
                // onChange={(e) => setChecked(e.target.name)}
                onChange={handleChange}
                />
              </label>
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