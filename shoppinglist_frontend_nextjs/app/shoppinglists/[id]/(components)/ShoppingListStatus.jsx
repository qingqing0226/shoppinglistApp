'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const ShoppingListStatus = ({ id }) => {
  const router = useRouter();
  const handleToggle = (e) => {
    fetch('http://localhost:8080/api/shoppinglists/' + id, {
      method: 'PUT'
    });
    router.refresh();
    e.preventDefault();
  };
  return (
    <button type="button" onClick={handleToggle}>Toggle</button>
  )
}

export default ShoppingListStatus;