import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartPage.scss';

const CartPage = () => {
  const { cart, updateQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
          <p>${item.price * item.quantity}</p>
        </div>
      ))}
      <h2>GRAND TOTAL: ${totalPrice}</h2>
    </div>
  );
};

export default CartPage;