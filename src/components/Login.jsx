import React from 'react';
import logo from './images/logo.png';

function Login() {
  // const [username, setUsername] = React.useState('');
  const [email, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const saveUserData = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      console.log('no username');
      return;
    }
    if (!password.trim()) {
      console.log('no password');
      return;
    }
    console.log('processing data...' + email + ' ' + password);
    e.target.reset();
    // setUsername('');
    // setPassword('');
    // signIn();
  }

  // const signIn = React.useCallback(async () => {
  //   try {
  //     const res = await auth().signInWithEmailAndPassword(email, password);
  //     console.log(res.user);
  //   } catch (error) {
  //     console.log(error + 'error');
  //   }
  // }, [])



  return (
    <div>
      <img src={ logo } alt="namitown" />
      <form onSubmit={ saveUserData }>
        <input type="email" placeholder="Username" className="form-control mb-2" onChange={ (e) => setUsername(e.target.value)} value={email}></input>
        <input type="password" placeholder="Password" className="form-control mb-2" onChange={ (e) => setPassword(e.target.value)} value={password}></input>
        <button className="btn btn-danger w-100" type="submit">LOGIN</button>
      </form>
    </div>
  )
}

export default Login;