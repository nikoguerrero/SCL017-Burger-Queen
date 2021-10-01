import React, { useState, useEffect } from 'react';
import './Kitchen.css';
import title from '../WaiterScreen/images/apptitle.png';
import Logout from '../Logout/Logout';
import '../Logout/Logout.css';
import KitchenBar from '../KitchenBar/KitchenBar';
import Tickets from '../Tickets/Tickets';
import { db } from '../../firebase';

const Kitchen = () => {

  const [data, setData] = useState([]);
  const [status, setStatus] = useState('all orders');

  // const fetchData = async (kitchenOrder) => {
  //   const orderStatus = kitchenOrder;
  //   const orderData = await orderStatus.get();
  //   const array = [];
  //   for (const doc of orderData.docs) {
  //     // console.log(doc.id, '=>', doc.data());
  //     const element = doc.data();
  //     const id = doc.id;
  //     array.push({...element, id});
  //   }
  //   setData(array);

  const fetchData = (kitchenOrder) => {
    const orderStatus = kitchenOrder;
    orderStatus.onSnapshot(snapshot => {
      const array = [];
      let changes = snapshot.docChanges();
    // console.log(changes);
      changes.forEach(change => {
        //console.log(change.type);
        if (change.type === 'added') {
          const element = change.doc.data();
          const id = change.doc.id;
          array.push({...element, id});
        } else if (change.type === 'removed') {
          // array.push({});
        }
      });
      setData(array);
    });
  };
  // fetchData();
  

  useEffect(() => {
    const orderCollection = db.collection('orders').orderBy('orderDate', 'desc');
    switch (status) {
      case 'all orders':
        fetchData(orderCollection);
      break;
      case 'new':
        fetchData(orderCollection.where('status', '==', 1));
      break;
      case 'active':
        fetchData(orderCollection.where('status', '==', 2));
      break;
      case 'done':
        fetchData(orderCollection.where('status', '==', 3));
      break;
      default:
        // fetchData(orderCollection);
      break;
    }
  }, [status]);
  
  return (
    <div className="kitchen-grid">
      <div className="image-container">
        <img src={ title } alt="namitowntitle" className="img-title"/>
      </div>
      <Logout />
      <Tickets
      data={data}
      // status={status}  
      />
      <KitchenBar 
      setStatus={setStatus}
      />
    </div>
  )
}

export default Kitchen;