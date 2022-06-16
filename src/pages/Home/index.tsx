  import 'react-native-gesture-handler';
import React from 'react';
import { PostCard } from '../../components/PostCard';
import { Header } from '../../components/Header';

import { Container, ScrollList } from './styles';
import NewPost from '../../components/NewPost';
import { PostType, usePosts } from '../../hooks/usePosts';


export function Home() {
  const { posts } = usePosts();
  
  return(
    <Container>
      <Header />
      <ScrollList 
        data={posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, key) => String(key)}
        renderItem={({item, index}) => (
          <PostCard key={String(index)} post={item as PostType}/>
        )}
      />
      <NewPost />
    </Container>
  )
};