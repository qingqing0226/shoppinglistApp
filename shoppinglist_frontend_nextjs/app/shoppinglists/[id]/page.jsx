import React from 'react';
const getData = async (id) => {
  const data = await fetch('http://localhost:8080/api/shoppinglists/' + id);
  return data.json();
}

const ShoppingList = async ({ params }) => {
  const shoppinglist = await getData(params.id);
  return (
    <div>
      <h2>ShoppingList with id: {params.id} </h2>
      <p>{shoppinglist.title}</p>
    </div>
  )
}

export default ShoppingList;