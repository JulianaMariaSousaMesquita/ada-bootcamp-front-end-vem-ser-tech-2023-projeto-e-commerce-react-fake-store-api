import { useState, useEffect } from 'react';

interface Cart {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}

function useGetAllCarts(): Cart[] {
  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then((data: Cart[]) => setCarts(data));
  }, []);

  return carts;
}

export default useGetAllCarts;
