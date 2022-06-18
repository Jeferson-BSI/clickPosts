import { useCallback, useEffect, useRef, useState } from 'react';
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
import { compareTwoDate } from '../../utils/dateProvider';

export function Home() {
  const { posts, isLoading, deletePost } = usePosts();

  const [selectedPost, setSelectedPost] = useState<PostType>({} as PostType);
  const [sortedPosts, setSortedPosts] = useState<PostType[]>([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function getPostToDelete(post:PostType) {
      setSelectedPost(post);
  }

  function getPostToEdit(post: PostType) {
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
    setSelectedPost({} as PostType);
  }

  function handleOrderPosts() {
    const postOrder = [...posts];

    postOrder.sort((a, b) => {
      if (!a.createdAt) {
        return -1;
      }
      if (!b.createdAt) {
        return 1;
      }
      return compareTwoDate(b.createdAt, a.createdAt);
    })    
    setSortedPosts(postOrder);
  }
  useEffect(() => {
      handleOrderPosts();
  }, [posts])


  return(
    <Container>
      <Header title='ClickPost'/>
      { 
        isLoading?
          <IsLoading 
            size={50}
            color={theme.colors.brand}
          />
        :
          <ScrollList 
            data={sortedPosts}
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
        onHandleClose={handleClose} 
        post={selectedPost} 
        />

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