import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from './productSlice';

const EditProductForm = ({ product, onCancel }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: product.id,
        name,
        description,
        price: parseFloat(price),
        available,
      })
    );
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Редактировать продукт</h3>
      <div>
        <label>Название:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Описание:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Цена:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Доступность:</label>
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </div>
      <button type="submit">Сохранить</button>
      <button type="button" onClick={onCancel}>
        Отмена
      </button>
    </form>
  );
};

export default EditProductForm;