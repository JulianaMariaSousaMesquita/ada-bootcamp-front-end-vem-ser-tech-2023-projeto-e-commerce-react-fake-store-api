import { useState, useEffect } from 'react';

interface Cart {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}

function useGetUserCarts(userId: number): Cart[] | null {
  const [userCarts, setUserCarts] = useState<Cart[] | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/user/${userId}`)
      .then(res => res.json())
      .then((data: Cart[]) => setUserCarts(data));
  }, [userId]);

  return userCarts;
}

export default useGetUserCarts;
