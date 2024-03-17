interface NewCart {
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}

function useAddNewCart(): (newCart: NewCart) => Promise<{ id: number }> {
  const addNewCart = async (newCart: NewCart): Promise<{ id: number }> => {
    const response = await fetch('https://fakestoreapi.com/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCart)
    });

    if (!response.ok) {
      throw new Error('Failed to add new cart');
    }

    return response.json();
  };

  return addNewCart;
}

export default useAddNewCart;
