import { useState, useEffect } from 'react';

interface User {
  id: number;
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

function useGetSingleUser(userId: number): User | null {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then(res => res.json())
      .then((data: User) => setUser(data));
  }, [userId]);

  return user;
}

export default useGetSingleUser;
