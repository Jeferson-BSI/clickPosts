import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useUsers } from './UseUsers';
import { api } from '../services/api';
import { dateNow, formatDate, subDate } from '../utils/dateProvider';
import { savePosts, getPostsSaved, delePost} from '../utils/storageProvider';


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
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getUser } = useUsers();

  async function handlePostData() {
    const postSaved = await getPostsSaved('@PostsReact');

    try {
      const response = await api.get<PostType[]>('/posts');
      
      const { data } = response;

      const postsWhitUserName:PostType[] = [];

      for await (let post of data) {
        const user = await getUser(post.userId);
        if(user){

          const newPost: PostType = {
            ...post,
            username: user.username,
            createdAt: subDate(formatDate('2022/06/12 05:54:32')),
          }
          postsWhitUserName.push(newPost);
        }
      }
      setPosts([...postSaved, ...postsWhitUserName]);
      setIsLoading(false);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let isMounted = true;
    handlePostData();
    return () => {
      isMounted = false;
    };
  }, []);

  function findPost(id: number) {
    return posts.find(post => post.id === id);
  }

  const RandomInteger = (min: number, max: number) =>(
    Math.floor(Math.random() * (max - min + 1)) + min
  )

  async function createPost(postInputs: PostTypeInput) {
    const RandomUserId = RandomInteger(102, 99999);
    try {
      const response = await api.post('/posts', {
        title: postInputs.title,
        body: postInputs.body,
      })
      const post = {
        ...response.data,
        username: postInputs.username,
        createdAt: dateNow(),
        id: RandomUserId
      };

      setPosts([post, ...posts]);
      savePosts('@PostsReact', post);  
    } catch (error) {
      console.log(error);
    }
  };

  async function editPost(postInputs: PostTypeInput, post: PostType) {    
    try {
      const response = await api.patch(`/posts/${post.userId}`, {
        title: postInputs.title,
        body: postInputs.body,
      });
      
      const newPosts = posts.filter(item => {      
        return post.id !== item.id
      });

      const newPost = {
        ...response.data,
        username: postInputs.username,
        createdAt: post.createdAt,
        userId: post.userId,
      };

      await delePost('@PostsReact', post.id)
      await savePosts('@PostsReact', newPost);  
      setPosts([newPost, ...newPosts]);
          
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

    await delePost('@PostsReact', id);
    setPosts([...newPosts]);
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