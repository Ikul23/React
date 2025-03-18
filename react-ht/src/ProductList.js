import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, toggleAvailability } from './productSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <div>
      <h3>Список продуктов</h3>
      {products.length === 0 ? (
        <p>Продуктов пока нет.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: '10px' }}>
              <div>
                <strong>{product.name}</strong> - {product.description} (
                {product.price} руб.)
              </div>
              <div>
                Доступность:{' '}
                <input
                  type="checkbox"
                  checked={product.available}
                  onChange={() => dispatch(toggleAvailability(product.id))}
                />
              </div>
              <button onClick={() => dispatch(deleteProduct(product.id))}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;