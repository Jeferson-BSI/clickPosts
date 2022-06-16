import { NotePencil, Trash } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
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
  userName: string;
  userId: number;
  id: number;
  title: string;
  body: string;
  createdAt?: string;
}

type PostCardProps = {
  post: PostType;

}

export function PostCard({ post }: PostCardProps) {
  const [user, setUser] = useState<UserType>({} as UserType);
  const { getUser } = useUsers()
  
  function handleDate(date: string): string {
    return compareDateToDateNow(date);
  } 
  
  async function handleUser() {
    const userRequest = await getUser(post.userId);

    setUser(userRequest);
  }

  useEffect(() => {
    handleUser();
  }, []);

  return(
    <Container>
      <HeaderCard>
        <UserContainer>
          <TextName>{user?.name}</TextName>
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

        <Clickable>
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