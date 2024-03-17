import { useState } from 'react';

function useUpdateCart() {
  const [updatedCart, setUpdatedCart] = useState(null);
  const [error, setError] = useState(null);

  const updateCart = async (cartId, newData) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`, {
        method: 'PUT', // ou 'PATCH' dependendo de como a API é configurada
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });

      if (!response.ok) {
        throw new Error('Failed to update cart');
      }

      const data = await response.json();
      setUpdatedCart(data);
      setError(null);
    } catch (error) {
      setUpdatedCart(null);
      setError(error.message);
    }
  };

  return { updatedCart, error, updateCart };
}

export default useUpdateCart;
