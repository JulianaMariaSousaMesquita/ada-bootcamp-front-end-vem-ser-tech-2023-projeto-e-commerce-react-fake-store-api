interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

function useUpdateProduct(): (productId: number, updatedProduct: Partial<Product>) => Promise<Product> {
  const updateProduct = async (productId: number, updatedProduct: Partial<Product>): Promise<Product> => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: 'PUT', // Você pode alterar para 'PATCH' se preferir
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    });
    
    if (!response.ok) {
      throw new Error('Failed to update product');
    }
    
    return response.json();
  };

  return updateProduct;
}

export default useUpdateProduct;
