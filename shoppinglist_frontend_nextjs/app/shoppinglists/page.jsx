import React from 'react';
import Link from 'next/link';
import '../../styles/shoppinglists.css';
import { faCheck, faListDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getData = async () => {
  const data = await fetch('http://localhost:8080/api/shoppinglists');
  return data.json();
}

const List = async () => {
  const data = await getData();
  const pendings = data.filter(list => !list.completed);
  const completeds = data.filter(list => list.completed);
  return (
    <section className="list--container">
      <div className="list">
        {pendings.map(shoplist => 
          <Link href={'shoppinglists/' + shoplist.id} key={shoplist.id} className={'row pending'}>
            {shoplist.title.toUpperCase()} {'(' + shoplist.createdDate + ') '}
            <FontAwesomeIcon icon={faListDots} className={'status'} />
          </Link>)}
          
        {completeds.map(shoplist => 
        <Link href={'shoppinglists/' + shoplist.id} key={shoplist.id} className={'row completed'}>
          {shoplist.title.toUpperCase()} {'(' + shoplist.createdDate + ') '} 
          <FontAwesomeIcon icon={faCheck} className={'status'} />
        </Link>)}
      </div>
    </section>
  )
}

export default List;