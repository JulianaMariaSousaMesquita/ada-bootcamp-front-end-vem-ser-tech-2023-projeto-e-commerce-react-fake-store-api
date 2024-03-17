import { useState, useEffect } from 'react';

function useGetAllCategories(): string[] {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then((data: string[]) => setCategories(data));
  }, []);

  return categories;
}

export default useGetAllCategories;
