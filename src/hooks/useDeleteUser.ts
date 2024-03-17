function useDeleteUser(): (userId: number) => Promise<void> {
    const deleteUser = async (userId: number): Promise<void> => {
      const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
        method: 'DELETE'
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
    };
  
    return deleteUser;
  }
  
  export default useDeleteUser;
  