interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

function useAddProduct(): (product: Product) => Promise<Product> {
  const addProduct = async (newProduct: Product): Promise<Product> => {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    });
    
    if (!response.ok) {
      throw new Error('Failed to add product');
    }
    
    return response.json();
  };

  return addProduct;
}

export default useAddProduct;
