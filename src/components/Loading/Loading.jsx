import React from 'react';
import './Loading.css';

const Loading = () => (
  <div className="load-container">
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
);

export default Loading;