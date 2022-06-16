import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export type UserType = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
  }
  phone: string,
  website: string,
}

type UserInputType = UserType;

type CreateContextType = {
  users: UserType[],
  createUser: (user: UserInputType) => Promise<void>;
  getUser: (id: number) => Promise<UserType>;
}

type UsersProviderProps = {
  children: ReactNode;
}


const UsersContext = createContext<CreateContextType>(
  {} as CreateContextType
);


export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<UserType[]>([])


  useEffect(() => {
    api.get('/users')
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      console.log(error);
    })

  }, []);

  async function getUser(id: number) {
    try {
      const response = await api.get(`/users/${id}`);
      console.log(response.data);

      const user = response.data;
      return user;
      
    } catch (error) {
      console.log(error);
    }
  } 


  async function createUser(userInputs: UserInputType) {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsersContext.Provider value={{users, createUser, getUser}}>
      { children }
    </UsersContext.Provider>
  )
};


export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}