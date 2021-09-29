import React, { useState } from 'react';
import './Kitchen.css';
import title from '../WaiterScreen/images/apptitle.png';
import Logout from '../Logout/Logout';
import '../Logout/Logout.css';
import KitchenBar from '../KitchenBar/KitchenBar';
import Tickets from '../Tickets/Tickets';

const Kitchen = () => {
  const [status, setStatus] = useState('waiting');
  return (
    <div className="kitchen-grid">
      <div className="image-container">
        <img src={ title } alt="namitowntitle" className="img-title"/>
      </div>
      <Logout />
      <Tickets />
      <KitchenBar 
      // setStatus={setStatus}
      />
    </div>
  )
}

export default Kitchen;