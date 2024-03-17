function useDeleteProduct(): (productId: number) => Promise<void> {
    const deleteProduct = async (productId: number): Promise<void> => {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
    };
  
    return deleteProduct;
  }
  
  export default useDeleteProduct;
  