import React from 'react';
import Link from 'next/link';
import '../../../styles/shoppinglistDetail.css';
import ShoppingListStatus from './(components)/ShoppingListStatus';

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
      <div className="detail-container">
        <div className="title detail">{shoppinglist.title}</div>
        <div className="date detail">Created at: {shoppinglist.createdDate}</div>
        <div className="totalPrice detail">Total price: {shoppinglist.totalPrice} SEK</div>
        <div className="status detail">
          Status: {shoppinglist.completed ? 'completed' : 'pending'}
          <Link href={'/shoppinglists/' + params.id}><ShoppingListStatus id={params.id} /></Link>
        </div>
        <details className="items detail">
          <summary className="summary">items</summary>
          {shoppinglist.items.map(item => <div className="row" key={item.title}>product: {item.title}, quantity: {item.quantity}, price: {item.price}</div>)}
        </details>
      </div>
    </article>
  )
}

export default ShoppingList;