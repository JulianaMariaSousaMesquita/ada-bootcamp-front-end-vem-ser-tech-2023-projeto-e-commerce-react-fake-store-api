interface UpdatedUser {
  email?: string;
  username?: string;
  password?: string;
  name?: {
    firstname?: string;
    lastname?: string;
  };
  address?: {
    city?: string;
    street?: string;
    number?: number;
    zipcode?: string;
    geolocation?: {
      lat?: string;
      long?: string;
    };
  };
  phone?: string;
}

function useUpdateUser(): (userId: number, updatedUser: UpdatedUser) => Promise<UpdatedUser> {
  const updateUser = async (userId: number, updatedUser: UpdatedUser): Promise<UpdatedUser> => {
    const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    });

    if (!response.ok) {
      throw new Error('Failed to update user');
    }

    return response.json();
  };

  return updateUser;
}

export default useUpdateUser;
