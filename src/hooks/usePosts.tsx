import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { dateNow } from '../utils/dateProvider';

export type PostType = {
  userId: number;
  username?: string;
  id: number;
  title: string;
  body: string;
  createdAt?: string;
}

type PostTypeInput = Omit<PostType, 'id' | 'userId'>

type CreateContextType = {
  posts: PostType[],
  isLoading: boolean;
  createPost: (post: PostTypeInput) => Promise<void>;
  deletePost: (id: number) => void;
  editPost: (postInput: PostTypeInput, post: PostType) => Promise<void>;
}

type PostsProviderProps = {
  children: ReactNode;
}

const PostsContext = createContext<CreateContextType>(
  {} as CreateContextType
);

export function PostProvider({ children }: PostsProviderProps) {
  const [posts, setPost] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    let isMounted = true;
    
    api.get('/posts')
    .then((response) => {
      setPost([...response.data])
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
        username: postInputs.username,
        createdAt: dateNow()
      };
      setPost([post, ...posts]);      

    } catch (error) {
      console.log(error);
    }
  };

  async function editPost(postInputs: PostTypeInput, post: PostType) {
    try {
      const response = await api.patch(`/posts/${post.userId}`, {
        title: postInputs.title,
        body: postInputs.body,
      })
      
      const newPosts = posts.filter(item => {      
        return post.id !== item.id
      });

      const newPost = {
        ...response.data,
        username: postInputs.username,
        createdAt: dateNow()
      };
      setPost([newPost, ...newPosts]);       

    } catch (error) {
      console.log(error);
    }
  };

  async function deletePost(id: number) {
    if(!findPost(id)){
      return;
    }

    const newPosts = posts.filter(post => {      
      return post.id !== id
    });
    setPost([...newPosts]);
  }


  return (
    <PostsContext.Provider value={{
      posts, isLoading, createPost, deletePost, editPost
    }}>
      { children }
    </PostsContext.Provider>
  )
};

export function usePosts() {
  const context = useContext(PostsContext);

  return context;
}