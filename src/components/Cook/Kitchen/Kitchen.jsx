import React /*, { useEffect }*/ from 'react';
import './Kitchen.css';
import KitchenBar from '../KitchenBar/KitchenBar';
import Tickets from '../Tickets/Tickets';

const Kitchen = (props) => {
  const { data, status, setStatus } = props;
  let filteredData = data;
  console.log(status);

  switch (status) {
    case 'new':
      filteredData = data.filter((item) => item.status === 0);
      break;
    case 'active':
      filteredData = data.filter((item) => item.status === 1);
      break;
    case 'done':
      filteredData = data.filter((item) => item.status === 2);
      break;
    default:
      filteredData = data.filter((item) => item.status < 3);
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