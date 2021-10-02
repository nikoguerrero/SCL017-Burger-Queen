import React, { Fragment } from 'react';
import './Table.css';
import Select from 'react-select';

export default function Table(props) {
  const { setTable, name } = props;

  const options = [
    { value: 'table-1', label: '1' },
    { value: 'table-2', label: '2' },
    { value: 'table-3', label: '3' },
    { value: 'table-4', label: '4' },
    { value: 'table-5', label: '5' }
  ];

  const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: 'none'
    }),
    option: (styles, { isFocused }) => ({
        ...styles,
        backgroundColor: isFocused ? '#F5B994' : null,
        color: isFocused ? 'white' : 'grey',
        border: 0,
        boxShadow: 'none'
    }),
    singleValue: provided => ({
      ...provided,
      marginLeft: 60
    })
  };
  
  return (
    <Fragment>
      <div className="table-container">
        <div className="waiter-name">Waiter 
          <div className="name-text">{name.name}</div>
        </div>
          <div type="text" className="table-number">
            <div className="table-text">Table N° </div>
          <Select className="select-control" 
          options={options} 
          styles={style}
          onChange={setTable}
          />
        </div>
      </div>
    </Fragment>
  )
}