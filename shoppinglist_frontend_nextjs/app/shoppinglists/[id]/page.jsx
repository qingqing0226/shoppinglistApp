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
      <div className="links-container">
        <Link href={'/shoppinglists/' + params.id + '/Edit'} className="links">Edit</Link>
        <Link href={'/shoppinglists/' + params.id + '/Delete'} className="links">Delete</Link>
      </div>
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