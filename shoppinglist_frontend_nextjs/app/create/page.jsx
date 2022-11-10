'use client'
import { React, useRef, useState, useEffect } from 'react';
import '../../styles/CreateForm.css';


const CreateForm = () => {
  const [add, setAdd] = useState(false);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [submit, setSubmit] = useState(false);
  const titleRef = useRef('');
  const itemTitle = useRef('');
  const itemQuan = useRef('');
  const itemPrice = useRef('');

  const addItem = () => {
    const copy = [...items];
    copy.push({ title: itemTitle.current.value, quantity: itemQuan.current.value, price: itemPrice.current.value });
    setItems(copy);
    itemTitle.current.value = null;
    itemQuan.current.value = null;
    itemPrice.current.value = null;
  }

  const removeItem = (title) => {
    const copy = [...items];
    setItems(copy.filter(item => item.title !== title));
  }

  useEffect(() => {
    setTotal(items.map(item => Number(item.price) * Number(item.quantity)).reduce((partial, accum) => partial + accum, 0));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleRef.current.value === '' || items.length === 0) return;
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
    }).then(res => res.json());
    setSubmit(true);
  };

  return (
    <article className="form-container">
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <fieldset className="form-fieldset">
          <legend className="form-legend">Create a Shopping List</legend>
          <div className="title-container">Title: <input className="title-input" ref={titleRef} placeholder="Enter list title" /></div>
          <div className="totalPrice">Total Price: {total} SEK</div>
          {(items) && (
            items.map((item, index) => <div className="item-info" key={index}>{item.title} {item.quantity}x{item.price} <button className="button-remove button" type='button' onClick={(e) => { e.stopPropagation(); removeItem(item.title); }}>Remove Item</button></div>)
          )}
          {(!add) && (
            <button className="button-addItem button" type='button' onClick={(e) => { e.stopPropagation(); setAdd(true) }}>Add Item</button>
          )}
          {(add) && (
            <div className="addFields">
              <input className="field" ref={itemTitle} placeholder="Enter item name" />
              <input className="field" ref={itemQuan} placeholder="Enter item quantity" />
              <input className="field" ref={itemPrice} placeholder="Enter item price" />
              <button className="button-add button" type='button' onClick={(e) => { e.stopPropagation(); addItem(); setAdd(false) }}>Add</button>
            </div>
          )}
          {(!add) && (
            <button className="button-submit button" type="submit" >Submit</button>
          )}
        </fieldset>
        {(submit) && (
          <div className="text--list-saved">The shopping list has been saved!</div>
        )}
      </form>
    </article >
  )
}

export default CreateForm;