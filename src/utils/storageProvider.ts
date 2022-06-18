import AsyncStorage from '@react-native-async-storage/async-storage';
import { PostType } from './../hooks/usePosts';

//Buscar os posts salvos

export async function getPostsSaved(key: string) {
  const posts = await AsyncStorage.getItem(key);

  const postsSaved = posts ? JSON.parse(posts) : [];

  return postsSaved;
}

// Salvar um novo post

export async function savePosts(key: string, newPost: PostType) {
  const postsStored = await getPostsSaved(key);

  const hasPost= postsStored.some(
    (item: PostType) => item.id === newPost.id,
  );

  if (hasPost) {
    console.log('já existe');
    return;
  }

  postsStored.push(newPost);

  await AsyncStorage.setItem(key, JSON.stringify(postsStored));
  console.log('post salvo');
}

// Deletar post específico
export async function delePost(key: string, id: number) {
  const postStored = await getPostsSaved(key);

  const posts = postStored.filter((item: PostType) => item.id !== id);

  await AsyncStorage.setItem(key, JSON.stringify(posts));
  console.log('post deletado');

  return posts;
}

// Filtrar algum post se já esta salvo

export async function hasMovie(key: string, movie: PostType) {
  const postStored = await getPostsSaved(key);

  const hasPost = postStored.find((item: PostType) => item.id === movie.id);

  if (hasPost) return true;

  return false;
}