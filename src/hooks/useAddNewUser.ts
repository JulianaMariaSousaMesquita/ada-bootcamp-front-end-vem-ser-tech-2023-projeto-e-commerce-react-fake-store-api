interface NewUser {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

function useAddNewUser(): (newUser: NewUser) => Promise<{ id: number }> {
  const addNewUser = async (newUser: NewUser): Promise<{ id: number }> => {
    const response = await fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    if (!response.ok) {
      throw new Error('Failed to add new user');
    }

    return response.json();
  };

  return addNewUser;
}

export default useAddNewUser;
