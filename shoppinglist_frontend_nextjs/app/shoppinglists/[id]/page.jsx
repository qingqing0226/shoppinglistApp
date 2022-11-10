import React from 'react';
import Link from 'next/link';

const getData = async (id) => {
  const data = await fetch('http://localhost:8080/api/shoppinglists/' + id);
  return data.json();
}

const ShoppingList = async ({ params }) => {
  const shoppinglist = await getData(params.id);
  return (
    <article className="card">
      <h3><Link href={'/shoppinglists/' + params.id + '/Edit'}>Edit</Link></h3>
      <h2>{shoppinglist.title}</h2>
      <p>Created at: {shoppinglist.createdDate}</p>
      <p>Total price: {shoppinglist.totalPrice} SEK</p>
      <p>Status: {shoppinglist.completed ? 'completed' : 'not completed'}</p>
      <details>
        <summary>items</summary>
        <p>{shoppinglist.items.map(item => <li key={item.title}>product: {item.title}, quantity: {item.quantity}, price: {item.price}</li>)}</p>
      </details>
    </article>
  )
}

export default ShoppingList;