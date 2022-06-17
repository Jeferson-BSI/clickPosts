import { useEffect, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useUsers } from '../../hooks/UseUsers';
import { PostType, usePosts } from '../../hooks/usePosts';


import { PostCard } from '../../components/PostCard';
import { Header } from '../../components/Header';
import NewPost from '../../components/NewPost';
import EditPost from '../../components/EditPost';

import { ConfirmationModal } from '../../components/ConfirmationModal';

import { theme } from '../../theme';
import { Container, ScrollList , IsLoading} from './styles';

export function Home() {
  const { posts, isLoading, deletePost } = usePosts();
  const { users } = useUsers();

  const [ postsWithUsername, setPostsWithUsername ] = useState<PostType[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostType>({} as PostType);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handlePostsName() {    
    const postsWithUsername =  posts.map((post) => {
      const user = users.find(user => user.id === post.userId)

      if(post.username || !user) {        
        return post;
      }

      return {
        ...post,
        username: user.username,
      };
    });

    return postsWithUsername;
  }

  function getPostToDelete(post:PostType) {
      setSelectedPost(post);
  }

  function getPostToEdit(post:PostType) {
    setSelectedPost(post);
    bottomSheetRef.current?.expand();
  }

  function handleDeletePost() {
    deletePost(selectedPost.id);
    handleCloseModal();
  }

  function handleOpenModal(){
    setModalIsOpen(true);
  }

   function handleCloseModal(){
    setModalIsOpen(false);
  }

   function handleClose() {
    bottomSheetRef.current?.close()
  }

  useEffect(() => {
    const postsWithUsername = handlePostsName();
    setPostsWithUsername(postsWithUsername)
  }, [posts, users])


  return(
    <Container>
      <Header />
      { 
        isLoading?
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
                onEditPost={getPostToEdit}
                onOpenModal={handleOpenModal}
              />
            )}
          />
      }

      <NewPost />
      <EditPost 
        bottomSheetRef={bottomSheetRef} 
        onHandleClose={handleClose} post={selectedPost}/>

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