import React from 'react';
import { ListItem } from '../ListItem/ListItem';
import './List.css';

export const List = ({ data }) => {
  const renderList = () => {
    return data.map(item => (
      <ListItem key={item.id}>{item.content}</ListItem>
    ))
  };

  return (
    <div className='list-container'>
      {renderList()}
    </div>
  )
};