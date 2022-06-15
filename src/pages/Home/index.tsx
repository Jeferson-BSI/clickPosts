import { PostCard } from '../../components/PostCard';
import { Header } from '../../components/Header';

const post =   [
  {
    'userName': 'Jeferson',
    "userId": 1,
    "id": 2,
    "title": "This's a first post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  },
  {
    'userName': 'Jeferson',
    "userId": 1,
    "id": 2,
    "title": "This's a first post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  },
  {
    'userName': 'Jeferson',
    "userId": 1,
    "id": 2,
    "title": "This's a first post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  },
    {
    'userName': 'Jeferson',
    "userId": 1,
    "id": 2,
    "title": "This's a first post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  },
    {
    'userName': 'Jeferson',
    "userId": 1,
    "id": 2,
    "title": "This's a first post",
    "body": "This is a post. It can be long, or short. Depends on what you have to say.  It can be long, or short. Depends on what you have to say."
  }

]


import { Container, ScrollList } from './styles';

export function Home() {
  return(
    <Container>
      <Header />
      <ScrollList 
        data={post}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, key) => String(key)}
        renderItem={({item, index}) => (
          <PostCard key={String(index)}/>
        )}

      />

    </Container>
  )
};