import { NotePencil, Trash } from 'phosphor-react-native';
import { theme } from '../../theme';

import { 
  Container, 
  HeaderPost, 
  TextName, 
  Content, 
  Title, 
  Body, 
  Time,
  FooterPost,
  Clickable
} from './styles';

const post =   {
    "userId": 1,
    "id": 2,
    "title": "This's a first post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  }


export function Post() {
  return(
    <Container>
      <HeaderPost>
        <TextName>Jeferson </TextName>
        <Time>• há 16m</Time>
      </HeaderPost>

      <Content>
        <Title>{post.title}</Title>
        <Body>{post.body}</Body>
      </Content>

      <FooterPost>
        <Clickable>
          <NotePencil 
            weight='bold'
            size={25}
            color={theme.colors.blueLight}
          />
        </Clickable>

        <Clickable>
          <Trash
            weight='bold'
            size={25}
            color={theme.colors.blueLight}
          />
        </Clickable>
      </FooterPost>
    </Container>
  )
};