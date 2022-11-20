
import { React, useState, useRef } from 'react'
import '../../../../styles/EditForm.css';

const EditForm = ({ data, titleRef, total, items, removeItem, setItems }) => {
  const [add, setAdd] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleRef.current.value === '' || items.length === 0) return;
    const body = {
      id: data.id,
      title: titleRef.current.value,
      createdDate: data.createdDate,
      totalPrice: total,
      completed: data.completed,
      items: items
    };
    fetch('http://localhost:8080/api/shoppinglists/edit' + data.id, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }).then(res => res.json());
  };

  return (
    <form onSubmit={handleSubmit} className="editform">
      <fieldset className="editform-fieldset">
        <legend className="editform-legend">Edit the list {data.title}</legend>
        <div className="editform-title">Title: <input className="title-input" ref={titleRef} defaultValue={data.title} /></div>
        <div className="editform-date">Created date: {data.createdDate}</div>
        <div className="editform-price">Total price: {total}</div>
        <div className="editform-status">Status: {data.completed ? 'completed' : 'pending'}</div>
        {items?.map(item => <div key={item.title} className="editform-item">
          {item.title + ' '} {item.quantity} x {item.price}
          <button className="button-removeItem button" type="button" onClick={(e) => { e.stopPropagation(); removeItem(item.title) }}>Remove Item</button>
        </div>)}
        {(!add) && (
          <button className="button-addItem button" type='button' onClick={(e) => { e.stopPropagation(); setAdd(true) }}>Add Item</button>
        )}
        {(add) && (
          <div className="addFields">
            <input className="field" ref={itemTitle} placeholder="Enter item name" />
            <input className="field" ref={itemQuan} placeholder="Enter item quantity" />
            <input className="field" ref={itemPrice} placeholder="Enter item price" />
            <button className="button-addItem button" type='button' onClick={(e) => { e.stopPropagation(); addItem(); setAdd(false) }}>Add</button>
          </div>
        )}
        {(!add) && (
          <button className="button-submit button" type="submit" >Submit</button>
        )}
      </fieldset>
    </form>
  );
}

export default EditForm;