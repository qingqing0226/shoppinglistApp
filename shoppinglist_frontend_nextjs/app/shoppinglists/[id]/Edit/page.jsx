'use client'
import { React, useRef, useState, useEffect } from 'react';
import EditForm from '../(components)/EditForm';
import '../../../../styles/EditForm.css';

const EditFormPage = ({ params }) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const titleRef = useRef('');
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8080/api/shoppinglists/' + params.id)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    setItems(data?.items);
    setTotal(items.map(item => Number(item.price) * Number(item.quantity)).reduce((partial, accum) => partial + accum, 0));
  }, []);

  useEffect(() => {
    setItems(data?.items);
  }, [data]);

  useEffect(() => {
    setTotal(items?.map(item => Number(item.price) * Number(item.quantity)).reduce((partial, accum) => partial + accum, 0));
  }, [items]);

  const removeItem = (title) => {
    const copy = [...items];
    setItems(copy.filter(item => item.title !== title));
  };


  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>


  return (
    <article className="editform-container">
      <EditForm data={data} titleRef={titleRef} total={total} items={items} removeItem={removeItem} setItems={setItems} />
    </article>
  )
}

export default EditFormPage;