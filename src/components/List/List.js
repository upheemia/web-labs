import React from 'react';
import './List.css';

export const List = ({ data }) => {
  const renderList = () => {
    return data.map(item => (
      <div key={item.id}>{item.content}</div>
    ))
  };

  return (
    <div className='list-container'>
      {renderList()}
    </div>
  )
};