import React from 'react';
import './Login.css'; 
import logo from './images/logo.png';
import { auth } from '../firebase';

function Login() {
  // const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const saveUserData = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      // console.log('no username');
      setError('Enter email');
      return;
    }
    if (!password.trim()) {
      // console.log('no password');
      setError('Enter password');
      return;
    }
    if (password.length < 6) {
      setError('Password should have more than 6 characters');
    }
    // e.target.reset();
    signIn();
    setEmail('');
    setPassword('');
  }

  const signIn = React.useCallback(async () => {
    try {
      console.log(email, password);
      const res = await auth.signInWithEmailAndPassword(email, password);
      console.log(res.user);
      console.log('logueado')
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/invalid-email') {
        setError('Invalid email');
      }
    }
  }, [email, password])



  return (
    <div>
      <img src={ logo } alt="namitown" />
      <form onSubmit={ saveUserData }>
        <input type="email" placeholder="Username" className="form-control mb-2" onChange={ (e) => setEmail(e.target.value)} value={email}></input>
        <input type="password" placeholder="Password" className="form-control mb-2" onChange={ (e) => setPassword(e.target.value)} value={password}></input>
        <button className="btn btn-danger w-100" type="submit">LOGIN</button>
      </form>
    </div>
  )
}

export default Login;