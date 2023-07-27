import axios from 'axios';
import { useEffect, useState } from 'react';
import { UserForm } from '../UserForm/UserForm';

axios.defaults.baseURL = 'https://mypets-backend.onrender.com/api/';

export const UserData = () => {
  const [user, setUser] = useState(null);

  const getCurrentUser = async () => {
    try {
      const response = await axios(`/users`);
      const { user } = await response.data;
      setUser(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user === null) {
      return;
    }
  }, [user]);

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <UserForm user={user} />
    </>
  );
};