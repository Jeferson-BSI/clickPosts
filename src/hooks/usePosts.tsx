import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { dateNow } from '../utils/dateProvider';

const LocalPost =   [
  {
    'userName': 'Jeferson',
    "userId": 1,
    "id": 2,
    "title": "Este é o primeiro post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  },
  {
    'userName': 'Jeferson',
    "userId": 1,
    "id": 2,
    "title": "This's a first post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  },
  {
    'userName': 'Jeferson',
    "userId": 1,
    "id": 2,
    "title": "This's a first post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  },
    {
    'userName': 'Jeferson',
    "userId": 1,
    "id": 2,
    "title": "This's a first post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  },
    {
    'userName': 'Jeferson',
    "userId": 1,
    "id": 2,
    "title": "This's a first post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  }

]

export type PostType = {
  userId: number;
  userName: string;
  id: number;
  title: string;
  body: string;
  createdAt?: string;
}

type CreateContextType = {
  posts: PostType[],
  createPost: (post: PostTypeInput) => Promise<void>;
}

type PostsProviderProps = {
  children: ReactNode;
}

type PostTypeInput = Omit<PostType, 'id' | 'userId'>


const PostsContext = createContext<CreateContextType>(
  {} as CreateContextType
);


export function PostProvider({ children }: PostsProviderProps) {
  const [posts, setPost] = useState<PostType[]>([])
  const [localPosts, setLocalPost] = useState<PostType[]>([])


  useEffect(() => {
    api.get('/posts')
    .then((response) => {
      setPost(response.data);
    })
    .catch((error) => {
      console.log(error);
    })

  }, []);

  async function createPost(postInputs: PostTypeInput) {
    const id = posts.length + 1;
    const userId = 200;

    const post = {
      id,
      userId,
      ...postInputs,
      createdAt: dateNow()
    }

    try {
      setLocalPost([...localPosts, post]);   

    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <PostsContext.Provider value={{posts, createPost}}>
      { children }
    </PostsContext.Provider>
  )
};


export function usePosts() {
  const context = useContext(PostsContext);

  return context;
}