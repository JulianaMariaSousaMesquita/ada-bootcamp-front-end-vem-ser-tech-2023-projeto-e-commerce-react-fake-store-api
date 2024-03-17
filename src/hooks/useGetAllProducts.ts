import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

function useGetAllProducts(): Product[] {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return products;
}

export default useGetAllProducts;
