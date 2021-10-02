import React /*, { useEffect }*/ from 'react';
import './Kitchen.css';
import KitchenBar from '../KitchenBar/KitchenBar';
import Tickets from '../Tickets/Tickets';

const Kitchen = (props) => {
  const { data, status, setStatus } = props;
  let filteredData = data;

  switch (status) {
    case 'new':
      filteredData = data.filter((item) => item.status === 1);
      break;
    case 'active':
      filteredData = data.filter((item) => item.status === 2);
      break;
    case 'done':
      filteredData = data.filter((item) => item.status === 3);
      break;
    default:
      break;
  }
  
  return (
    <div className="kitchen-grid">
      <Tickets
      data={filteredData}
      />
      <KitchenBar 
      setStatus={setStatus}
      />
    </div>
  )
}

export default Kitchen;