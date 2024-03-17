import { useState, useEffect } from 'react';

interface Cart {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}

function useGetSingleCart(cartId: number): Cart | null {
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${cartId}`)
      .then(res => res.json())
      .then((data: Cart) => setCart(data));
  }, [cartId]);

  return cart;
}

export default useGetSingleCart;
