import { useEffect, useState } from 'react';
import { PostType, usePosts } from '../../hooks/usePosts';
import { useUsers } from '../../hooks/UseUsers';


import { PostCard } from '../../components/PostCard';
import { Header } from '../../components/Header';
import NewPost from '../../components/NewPost';
import { ConfirmationModal } from '../../components/ConfirmationModal';

import { theme } from '../../theme';
import { Container, ScrollList , IsLoading} from './styles';

export function Home() {
  const { posts, isLoading, deletePost } = usePosts();
  const { users } = useUsers();

  const [ postsWithUsername, setPostsWithUsername ] = useState<PostType[]>([]);
  const [postToDelete, setPostoDelete] = useState<PostType>({} as PostType);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  function handlePostsName() {
    const postsWithUsername =  posts.map((post) => {
      const user = users.find(user => user.id === post.userId)
      if(!user) {
        // console.log(users);
      }
      return {
        ...post,
        username: user?.username,
      };
    });

    return postsWithUsername;
  }

  function getPostToDelete(post:PostType) {
      setPostoDelete(post)
  }

  function handleDeletePost() {
    deletePost(postToDelete.id);
    handleCloseModal();
  }

  function handleOpenModal(){
    setModalIsOpen(true)
  }

   function handleCloseModal(){
    setModalIsOpen(false)
  }

  useEffect(() => {
    const postsWithUsername = handlePostsName();
    setPostsWithUsername(postsWithUsername)
  }, [posts, users])


  return(
    <Container>
      <Header />
      { 
        isLoading ?
          <IsLoading 
          size={50}
          color={theme.colors.brand}
        />
        :
        <ScrollList 
          data={postsWithUsername}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, key) => String(key)}
          renderItem={({item, index}) => (
            <PostCard 
              key={String(index)} 
              post={item as PostType}
              onDeletePost={getPostToDelete}
              onOpenModal={handleOpenModal}
            />
          )}
        />
      }

      <NewPost />
      <ConfirmationModal 
        title='Are you sure?'
        body='Are you sure you want to delete this post?'
        onClickCancel={handleCloseModal}
        onClickOK={handleDeletePost}
        isVisible={modalIsOpen}
      />
    </Container>
  )
};