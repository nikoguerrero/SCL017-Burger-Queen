import React, { useEffect, Fragment } from 'react';
import { auth } from '../../firebase';
import './Kitchen.css';
import title from '../WaiterScreen/images/apptitle.png';

const Kitchen = () => {
  useEffect(() => {
    if (auth.currentUser) {
      console.log('user');
    } else {
      console.log('no user');
    }
  }, []);

  return (
    <div className="kitchen-grid">
       <div className="image-container">
        <img src={ title } className="img-title"></img>
      </div>
      <Fragment>
        COCINAAAA
      </Fragment>
    </div>
  )
}

export default Kitchen;