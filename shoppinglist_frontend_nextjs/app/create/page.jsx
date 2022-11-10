'use client'
import { React, useRef, useState, useEffect } from 'react';


const CreateForm = () => {
  const [add, setAdd] = useState(false);
  const [total, setTotal] = useState(0);
  const titleRef = useRef();
  const itemTitle = useRef();
  const itemQuan = useRef();
  const itemPrice = useRef();
  const [items, setItems] = useState([]);

  const addItem = () => {
    const copy = [...items];
    copy.push({ title: itemTitle.current.value, quantity: itemQuan.current.value, price: itemPrice.current.value });
    setItems(copy);
    itemTitle.current.value = null;
    itemQuan.current.value = null;
    itemPrice.current.value = null;
  }

  useEffect(() => {
    setTotal(items.map(item => Number(item.price) * Number(item.quantity)).reduce((partial, accum) => partial + accum, 0));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: titleRef.current.value,
      createdDate: new Date().toLocaleDateString(),
      totalPrice: total,
      completed: false,
      items: items
    };
    fetch(`http://localhost:8080/api/shoppinglists`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(res => console.log(res));
  };

  return (
    <article>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Create a shopping list</legend>
          <div>Total price: {total} SEK</div>
          {(items) && (
            items.map(item => <div key={item.title}>{item.title} {item.quantity}x{item.price}</div>)
          )}
          <div><input ref={titleRef} placeholder="Enter list title" /></div>
          {(!add) && (
            <button type='button' onClick={(e) => { e.stopPropagation(); setAdd(true) }}>Add Item</button>
          )}
          {(add) && (
            <div>
              <input ref={itemTitle} placeholder="Enter item name" />
              <input ref={itemQuan} placeholder="Enter item quantity" />
              <input ref={itemPrice} placeholder="Enter item price" />
              <button type='button' onClick={(e) => { e.stopPropagation(); addItem(); setAdd(false) }}>Done</button>
            </div>
          )}
          {(!add) && (
            <button type="submit" >Submit</button>
          )}
        </fieldset>
      </form>
    </article>
  )
}

export default CreateForm;