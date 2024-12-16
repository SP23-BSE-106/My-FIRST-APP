import React from 'react';

function ShoppingCart({ items }) {
  return (
    <div>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
