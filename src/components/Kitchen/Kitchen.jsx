import React from 'react';
import './Kitchen.css';
import title from '../WaiterScreen/images/apptitle.png';
// import Logout from '../Logout/Logout';
import '../Logout/Logout.css';
import KitchenBar from '../KitchenBar/KitchenBar';
import Tickets from '../Tickets/Tickets';

const Kitchen = () => {

  return (
    <div className="kitchen-grid">
       <div className="image-container">
        <img src={ title } alt="namitowntitle" className="img-title"></img>
      </div>
      {/* <Logout /> */}
      {/* <Fragment>
        COCINAAAA
      </Fragment> */}
      <Tickets />
      <KitchenBar />
    </div>
  )
}

export default Kitchen;