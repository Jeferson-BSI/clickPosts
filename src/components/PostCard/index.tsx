import { NotePencil, Trash } from 'phosphor-react-native';
import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { usePosts } from '../../hooks/usePosts';
import { UserType, useUsers } from '../../hooks/UseUsers';
import { theme } from '../../theme';
import { compareDateToDateNow } from '../../utils/dateProvider';

import { 
  Container, 
  HeaderCard, 
  TextName, 
  Content, 
  Title, 
  Body, 
  Time,
  FooterPost,
  UserContainer,
  Clickable,
  Line
} from './styles';


export type PostType = {
  username?: string;
  userId: number;
  id: number;
  title: string;
  body: string;
  createdAt?: string;
}

type PostCardProps = {
  post: PostType;
  onDeletePost: (post: PostType) => void;
  onOpenModal: () => void;

}

export function PostCard({ post, onDeletePost, onOpenModal }: PostCardProps) {
  const { deletePost } = usePosts();

  function handlerDeletePost(){
    deletePost(post.id)
  }

  function handleDate(date: string): string {
    return compareDateToDateNow(date);
  }

  return(
    <Container>
      <HeaderCard>
        <UserContainer>
          <TextName>{ post.username }</TextName>
        </UserContainer>
        <Time>• há {
          post.createdAt?
            handleDate(post.createdAt): 
             '4 meses'
          }
        </Time>
      </HeaderCard>

      <Content>
        <Title>{post.title}</Title>
        <Body>{post.body}</Body>
      </Content>

      <Line />
      <FooterPost>
        <Clickable>
          <NotePencil 
            weight='thin'
            size={24}
            color={theme.colors.blueLight}
          />
        </Clickable>

        <Clickable
          onPress={()=>{
            onDeletePost(post)
            onOpenModal();
          }}
        >
          <Trash
            weight='thin'
            size={24}
            color={theme.colors.blueLight}
          />
        </Clickable>
      </FooterPost>
    </Container>
  )
};