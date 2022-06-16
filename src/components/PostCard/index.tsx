import { NotePencil, Trash } from 'phosphor-react-native';
import { theme } from '../../theme';

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
  Clickable
} from './styles';


export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}


type PostCardProps = {
  post: PostType;
}

export function PostCard({ post }: PostCardProps) {
  return(
    <Container>
      <HeaderCard>
        <UserContainer>
          <TextName>Jeferson</TextName>
        </UserContainer>
        <Time>• há 16m</Time>
      </HeaderCard>

      <Content>
        <Title>{post.title}</Title>
        <Body>{post.body}</Body>
      </Content>

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