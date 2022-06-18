import { NotePencil, Trash } from 'phosphor-react-native';
import { compareDateToDateNow } from '../../utils/dateProvider';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../routes/stackRouter';

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
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';


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
  onEditPost: (post: PostType) => void;
  onOpenModal: () => void;
}

export function PostCard({ 
  post, 
  onDeletePost, 
  onEditPost, 
  onOpenModal 
}: PostCardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const { colors } = useContext(ThemeContext);

  function handleDate(date: string): string {
    return compareDateToDateNow(date);
  }

  function navigationToProfile() {

    const { userId, username } = post;
    if (username){

      navigation.navigate('Profile', {userId, username})
    }
  }


  return(
    <Container>
      <HeaderCard>
        <UserContainer
          onPress={navigationToProfile}
        >
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
        <Body>{post.body.replace(/\n/gi, ' ')}</Body>
      </Content>

      <Line />
      <FooterPost>
        <Clickable
          onPress={()=>{
            onEditPost(post)
          }}
        >
          <NotePencil 
            weight='thin'
            size={24}
            color={colors.icons}
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
            color={colors.icons}
          />
        </Clickable>
      </FooterPost>
    </Container>
  )
};