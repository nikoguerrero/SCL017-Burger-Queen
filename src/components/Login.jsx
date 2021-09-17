import React from 'react';
import './Login.css'; 
// import logo from './images/logo.png';
import { auth } from '../firebase';
import { withRouter } from 'react-router-dom';
import toggleSwitch from './images/toggleswitch.png';

const Login = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const saveUserData = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Enter email');
      return;
    }
    if (!password.trim()) {
      setError('Enter password');
      return;
    }
    if (password.length < 6) {
      setError('Password should have more than 6 characters');
    }
    signIn();
  }

  const signIn = React.useCallback(async () => {
    try {
      console.log(email, password);
      const res = await auth.signInWithEmailAndPassword(email, password);
      console.log(res.user);
      setEmail('');
      setPassword('');
      setError(null);
      props.history.push('/menu');
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/invalid-email') {
        setError('Invalid email');
      }
    }
  }, [email, password, props.history])

  const introMessages = [
    'Everything\'s so yummy!', 'Ñami, ñami', '🐱 🍔'
  ];

  return (
    <div className="grid">
      <div className="toggle-container">
      <img src={ toggleSwitch } alt="toggle" className="toggle-switch"/>
      </div>
      <div className="logo-container">
        {/* <img src={ logo } alt="namitown" /> */}
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
}

export default withRouter(Login);