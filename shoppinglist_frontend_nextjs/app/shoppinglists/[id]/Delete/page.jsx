'use client'
import React from 'react';
import '../../../../styles/styles.css';

const Delete = ({ params }) => {
  fetch(`http://localhost:8080/api/shoppinglists/${params.id}`, {
    method: 'DELETE',
    mode: 'cors',
  });
  return (
    <div className="delete--message">The list has been deleted !</div>
  )
}

export default Delete;