import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Link href={'/shoppinglists'}>View All</Link><br />
      <Link href={'/create'}>Create a Shoppinglist</Link>
    </div>
  )
}

export default Home;