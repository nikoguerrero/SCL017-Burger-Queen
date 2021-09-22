import React, { Fragment } from 'react';
import './Waiter.css';
import { auth } from '../../firebase';
import { db } from '../../firebase';

export default function Waiter() {
  const [name, setName] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      let currentUser = auth.currentUser;
      const waitersData = await db.collection('waiters').doc(currentUser.uid).get();
      const waiterName = waitersData.data();
      // console.log(waiterName);
      setName(waiterName);
    }
    getData();
  }, []);

  console.log(name.name);
  
  return (
    <Fragment>
      <div className="waiter-container">
        <div className="waiter-name">Waiter: {name.name}</div>
        <input type="text" className="table-number"/>
      </div>
    </Fragment>
  )
}