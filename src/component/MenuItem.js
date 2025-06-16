import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <img src={item.imageSrc} alt={item.name} />
      <p>Цена: {item.price} KGS</p>
      <button onClick={handleAddItem}>Добавить в заказ</button>
    </div>
  );
};

export default MenuItem;
