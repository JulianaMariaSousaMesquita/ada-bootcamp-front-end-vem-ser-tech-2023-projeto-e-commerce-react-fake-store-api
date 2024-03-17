import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

function useGetProductsByCategory(category: string): Product[] {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then((data: Product[]) => setProducts(data));
  }, [category]);

  return products;
}

export default useGetProductsByCategory;
