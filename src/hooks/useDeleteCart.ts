function useDeleteCart(): (cartId: number) => Promise<void> {
    const deleteCart = async (cartId: number): Promise<void> => {
      const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`, {
        method: 'DELETE'
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete cart');
      }
    };
  
    return deleteCart;
  }
  
  export default useDeleteCart;
  