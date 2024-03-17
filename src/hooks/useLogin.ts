import { useState } from 'react';

function useLogin() {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      setToken(data.token);
      setError(null);
    } catch (error) {
      setToken(null);
      setError(error.message);
    }
  };

  return { token, error, login };
}

export default useLogin;
