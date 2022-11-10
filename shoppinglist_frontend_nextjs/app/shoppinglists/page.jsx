import React from 'react';
import Link from 'next/link';

const getData = async () => {
  const data = await fetch('http://localhost:8080/api/shoppinglists');
  return data.json();
}

const List = async () => {
  const data = await getData();
  return (
    <div>
      <ul>
        {data.map(shoplist => <li key={shoplist.id}><Link href={'shoppinglists/' + shoplist.id}>title {shoplist.title}, created at {shoplist.createdDate}, SEK {shoplist.totalPrice}</Link></li>)}
      </ul>
    </div>
  )
}

export default List;