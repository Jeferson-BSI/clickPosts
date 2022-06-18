import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: {
      "street": string;
      "suite": string;
      "city": string;
      "zipcode": string;
    };
  company?: {
    name: string;
  };
}

type UserInputType = UserType;

type CreateContextType = {
  users: UserType[];
  createUser: (user: UserInputType) => Promise<void>;
  getUser: (id: number) => Promise<UserType | undefined>;
  findUser: (id: number) => UserType | void;
}

type UsersProviderProps = {
  children: ReactNode;
}


const UsersContext = createContext<CreateContextType>(
  {} as CreateContextType
);


const userLocal = {
    "id": 1,
    "name": "Jeferson Lopes Coutinho",
    "username": "Jeferson Lopes",
    "email": "Jeferson@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}


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
      const response = await api.get<UserType>(`/users/${id}`);
      const user = response.data;  
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  function findUser(id: number) {
    if(!users) {
      return;
    }      
    return users.find(user => user.id === id);
  }

  async function createUser(userInputs: UserInputType) {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsersContext.Provider value={{users, createUser, getUser, findUser}}>
      { children }
    </UsersContext.Provider>
  )
};


export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}