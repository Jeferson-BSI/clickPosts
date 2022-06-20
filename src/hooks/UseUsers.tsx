import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { getUserPreferences, saveUserPreferences } from '../utils/storageProvider';

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: {
      street: string;
      suite: string;
      city: string;
    };
  company?: {
    name: string;
  };
}


type modeType = 'dark' | 'light';

type CreateContextType = {
  users: UserType[];
  userPreferences: modeType;
  getUser: (id: number) => Promise<UserType | undefined>;
  findUser: (id: number) => UserType | void;
  handleUserPreferences:(mode: modeType) => void;
}

type UsersProviderProps = {
  children: ReactNode;
}

const UsersContext = createContext<CreateContextType>(
  {} as CreateContextType
);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<UserType[]>([]);
  const [userPreferences, setUserPreferences] = useState<modeType>('light');

  useEffect(() => {
    api.get('/users')
    .then((response) => {
      setUsers(response.data);
      
      getUserPreferences("@themeMode")
      .then((response) => {
        setUserPreferences(response);
      })
    })
    .catch((error) => {
      console.log(error);
    })

    
  }, []);


  async function getUser(id: number) {
    try {
      const response = await api.get<UserType>(`/users/${id}`);
      const user = response.data; 
       
      return user;
    } catch (error) {
      console.log(error);
    }
    return;
  }

  function findUser(id: number) {
    if(!users) {
      return;
    }      
    return users.find(user => user.id === id);
  }

  function handleUserPreferences(mode: 'dark' | 'light') {
    saveUserPreferences('@themeMode', mode);
    setUserPreferences(mode);
  }

  return (
    <UsersContext.Provider value={{
      users, 
      handleUserPreferences, 
      userPreferences, 
      getUser, 
      findUser,
      }}>
      { children }
    </UsersContext.Provider>
  )
};


export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}