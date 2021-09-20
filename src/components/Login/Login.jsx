import React from 'react';
import './Login.css'; 
import { auth } from '../../firebase';
import { withRouter } from 'react-router-dom';
import toggleSwitch from './images/toggleswitch.png';

const Login = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const saveUserData = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Enter email and password');
    } else if (!email.trim()) {
      setError('Enter email');
    } else if (!password.trim()) {
      setError('Enter password');
    } else {
      signIn();
    }
  };

  const signIn = React.useCallback(async () => {
    try {
      console.log(email, password);
      const res = await auth.signInWithEmailAndPassword(email, password);
      console.log(res.user);
      // setEmail('');
      // setPassword('');
      // setError(null);
      props.history.push('/menu');
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case 'auth/user-not-found':
          setError('Invalid email');
          break;
        case 'auth/wrong-password':
          setError('Invalid password');
          break;
        default: setError(null);
      } 
    }
  }, [email, password, props.history]);

  const introMessages = [
    'Everything\'s so yummy!', 'Ñami, ñami', '🐱 🍔'
  ];

  return (
    <div className="grid">
      <div className="toggle-container">
      <img src={ toggleSwitch } alt="toggle" className="toggle-switch"/>
      </div>
      <div className="logo-container">
        <div className="img"></div>
      </div>
      <div className="logo-message">{ introMessages[Math.floor(Math.random() * introMessages.length)] }</div>
      <div className="error-message">{ error && (<div>{error}</div>) }</div>
      <div className="form-grid">
          <form className="form-container" onSubmit={saveUserData}>
            <input type="email" placeholder="Email" className="form-input user" onChange={ (e) => setEmail(e.target.value)} value={email}></input>
            <input type="password" placeholder="Password" className="form-input password" onChange={ (e) => setPassword(e.target.value)} value={password}></input>
            <button className="btn" type="submit">LOGIN</button>
          </form>
      </div>
    </div>
  )
};

export default withRouter(Login);