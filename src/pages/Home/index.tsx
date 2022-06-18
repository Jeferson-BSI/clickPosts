import { useContext, useEffect, useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { PostType, usePosts } from '../../hooks/usePosts';

import { PostCard } from '../../components/PostCard';
import { Header } from '../../components/Header';
import NewPost from '../../components/NewPost';
import EditPost from '../../components/EditPost';

import { ConfirmationModal } from '../../components/ConfirmationModal';

import { compareTwoDate } from '../../utils/dateProvider';

import { 
  Container, 
  ScrollList , 
  IsLoading,   

} from './styles';
import { SelectedThemeMode } from '../../components/SelectedThemeMode';
import { ThemeContext } from 'styled-components';

export function Home() {
  const { colors } = useContext(ThemeContext);

  const { posts, isLoading, deletePost } = usePosts();

  const [selectedPost, setSelectedPost] = useState<PostType>({} as PostType);
  const [sortedPosts, setSortedPosts] = useState<PostType[]>([]);
  const [isOpenOptionMode, setIsOpenOptionMode] = useState(false);


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

  function handleCloseOptionMode(){
    setIsOpenOptionMode(false);
  }

  function handleOpenOptionMode(){
    setIsOpenOptionMode(true);
  }

  return(
    <Container>
      <Header title='ClickPost' onOpenOptionsMode={handleOpenOptionMode} />
      { 
        isLoading?
          <IsLoading 
            size={50}
            color={colors.brand}
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

      { isOpenOptionMode &&
        <SelectedThemeMode 
          dark='Dark' 
          light='Light' 
          onCloseOptionsMode={handleCloseOptionMode}
        />
      }
    </Container>
  )
};