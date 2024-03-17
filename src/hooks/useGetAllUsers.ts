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

function useGetAllUsers(): User[] | null {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(res => res.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return users;
}

export default useGetAllUsers;
