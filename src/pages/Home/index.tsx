import { Header } from '../../components/Header';
import { Post } from '../../components/Post';

import { Container } from './styles';

export function Home() {
  return(
    <Container>
      <Header />
      <Post />
      <Post />
    </Container>
  )
};