import React from 'react';
import Link from 'next/link';
import '../../styles/shoppinglists.css';

const getData = async () => {
  const data = await fetch('http://localhost:8080/api/shoppinglists');
  return data.json();
}

const List = async () => {
  const data = await getData();
  return (
    <section className="list--container">
      <div className="list">
        {data.map(shoplist => <Link href={'shoppinglists/' + shoplist.id} key={shoplist.id} className="row">{shoplist.title.toUpperCase()} {'(' + shoplist.createdDate + ')'}</Link>)}
      </div>
    </section>
  )
}

export default List;