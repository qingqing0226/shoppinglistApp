import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <section className="home">
      <Link href={'/shoppinglists'} className="home--links" >View All</Link><br />
      <Link href={'/create'} className="home--links">Create a Shopping List</Link>
    </section>
  )
}

export default Home;