import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

function useGetSingleProduct(productId: number): Product | null {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then((data: Product) => setProduct(data));
  }, [productId]);

  return product;
}

export default useGetSingleProduct;
