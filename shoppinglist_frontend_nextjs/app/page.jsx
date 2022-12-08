import React from 'react';
import '../styles/Home.css';
import Link from 'next/link';

const getData = async () => {
  const data = await fetch('http://localhost:8080/api/shoppinglists/latest');
  return data.json();
}

const Home = async () => {
  const latest = await getData();

  return (
    <section className="home">
      <div className="detail-container">
        <div className="title detail">{latest.title.toUpperCase()}</div>
        <Link href={'shoppinglists/' + latest.id + '/Edit'} className="edit detail">Edit</Link>
        <div className="date detail">Created at: {latest.createdDate}</div>
        <div className="totalPrice detail">Total Price: {latest.totalPrice} SEK</div>
        <div className="status detail">
          Status: {latest.completed ? 'completed' : 'pending'}
        </div>
        <details className="items detail">
          <summary className="summary">Items</summary>
          {latest.items.map(item => <div className="itemrow" key={item.title}>product: {item.title} quantity: {item.quantity} price: {item.price}</div>)}
        </details>
      </div>
    </section>
  )
}

export default Home;