import React, { useState } from "react";
import "./css/Cart.css";
import { boutique, boutique2 } from "../assets";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Porte Badge / clef - Édition limitée",
      price: 11.9,
      quantity: 1,
      image: boutique,
    },
    {
      id: 2,
      name: "Formation complète sur Canva",
      price: 550,
      quantity: 1,
      image: boutique2,
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Panier</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Sous-total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="product-info">
                <img src={item.image} alt={item.name} />
                <a href="" style={{color: '#c36'}}>{item.name}</a>
              </td>
              <td>{item.price.toFixed(2)}€</td>
              <td>
                <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span className="qty">{item.quantity}</span>
                <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </td>
              <td>{(item.price * item.quantity).toFixed(2)}€</td>
              <td>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-total">
        <h3>Total panier</h3>
        <p>Sous-total : {subtotal.toFixed(2)}€</p>
        <p>Total : {subtotal.toFixed(2)}€</p>
        <button className="paypal-btn">PayPal</button>
        <button className="checkout-btn">Valider la commande</button>
      </div>
    </div>
  );
};

export default Cart;
