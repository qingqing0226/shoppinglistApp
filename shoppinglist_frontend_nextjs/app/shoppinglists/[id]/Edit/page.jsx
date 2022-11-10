'use client'
import { React, useRef, useState, useEffect } from 'react';


const EditForm = ({ params }) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8080/api/shoppinglists/' + params.id)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
  }, []);
  const titleRef = useRef('');
  const creatDateRef = useRef('');
  const statusRef = useRef('');
  const [items, setItems] = useState(data?.items ?? []);
  const [total, setTotal] = useState(data?.totalPrice ?? '');



  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  const removeItem = (title) => {
    const copy = items.filter(item => item.title !== title);
    setItems([...copy]);
    setTotal(items.reduce((partial, accu) => partial + accu, 0));
  };
  return (
    <article>
      <form>
        <fieldset>
          <legend>Edit the list {data.title}</legend>
          <div>Title: <input ref={titleRef} defaultValue={data.title} /></div>
          <div>Created date: <input ref={creatDateRef} defaultValue={data.createdDate} /></div>
          <div>Total price: {total}</div>
          <input ref={statusRef} defaultValue={data.completed ? 'completed' : 'not completed'} />
          {items.map(item => <li key={item.title}>
            Title: {item.title}
            Quantity: {item.quantity}
            Price: {item.price}
            <button onClick={(e) => { e.stopPropagation(); removeItem(item.title) }}>Remove</button>
          </li>)}
          <button>Add Item</button>
        </fieldset>
      </form>
    </article>
  )
}

export default EditForm;