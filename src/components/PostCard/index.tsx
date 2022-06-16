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

const post =   {
    "userId": 1,
    "id": 2,
    "title": "This's a first post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  }


export function PostCard() {
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