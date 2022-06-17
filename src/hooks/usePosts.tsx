import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { dateNow } from '../utils/dateProvider';
import { useUsers } from './UseUsers';

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
  username?: string;
  id: number;
  title: string;
  body: string;
  createdAt?: string;
}

type CreateContextType = {
  posts: PostType[],
  isLoading: boolean;
  createPost: (post: PostTypeInput) => Promise<void>;
  deletePost: (id: number) => void;
}

type PostsProviderProps = {
  children: ReactNode;
}

type PostTypeInput = Omit<PostType, 'id' | 'userId'>

const PostsContext = createContext<CreateContextType>(
  {} as CreateContextType
);

export function PostProvider({ children }: PostsProviderProps) {
  const [posts, setPost] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // const { users } = useUsers();

  // function handlePostsName(data: PostType[]) {
  //   const postsWithUsername =  data.map((post) => {
  //     const user = users.find(user => user.id === post.userId)
  //     if(!user) {
  //       console.log(users);
  //     }
  //     return {
  //       ...post,
  //       username: user?.username,
  //     };
  //   });
    
  //   return postsWithUsername;
  // }

  useEffect( () => {
    let isMounted = true;
    
    api.get('/posts')
    .then((response) => {
      setPost([...response.data])
      // const postsWithUsername = handlePostsName(response.data);
      
      // setPost([...postsWithUsername])
      setIsLoading(false);
    })

    return () => {
      isMounted = false;
    };
  }, []);

  function findPost(id: number) {
    return posts.find(post => post.id === id);
  }

  async function createPost(postInputs: PostTypeInput) {
    const userId = 200;
    try {
      const response = await api.post('/posts', {
        title: postInputs.title,
        body: postInputs.body,
        userId
      })

      const post = {
        ...response.data,
        userName: postInputs.username,
        createdAt: dateNow()
      };
      setPost([post, ...posts]);   

    } catch (error) {
      console.log(error);
    }
  };

  async function deletePost(id: number) {
    if(!findPost(id)){
      return;
    }
    let a
    const newPosts = posts.filter(post => {
      // console.log(post.userId);
      
      return post.id !== id
    });
    setPost([...newPosts]);
    // console.log(id); 
  }


  return (
    <PostsContext.Provider value={{posts, isLoading, createPost, deletePost}}>
      { children }
    </PostsContext.Provider>
  )
};

export function usePosts() {
  const context = useContext(PostsContext);

  return context;
}