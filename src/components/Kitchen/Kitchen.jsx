import React, { useEffect } from 'react';
import { auth } from '../../firebase';

const Kitchen = () => {
  useEffect(() => {
    if (auth.currentUser) {
      console.log('user');
    } else {
      console.log('no user');
    }
  }, []);

  return (
    <div className="kitchen-cointainer">
    </div>
  )
}

export default Kitchen;