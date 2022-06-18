import { useState } from 'react';
import { X } from 'phosphor-react-native';
import { PostType, usePosts } from '../../hooks/usePosts';
import { theme } from '../../theme';
import { Button } from '../Button'

import { 
  Container,  
  TitleContainer, 
  Title, 
  InputContainer, 
  TextInput,
  Footer,
  InputBody,
  HeaderFrom
 } from './styles';

type FormProps = {
  onModalClose: () => void;
  post?: PostType;
}

type PostInputsType = {
  username?: string;
  title: string;
  body: string;
}
type InputErrorType = 'title' | 'body' | 'username' | 'default'| '';

export function Form({ onModalClose, post }: FormProps) {
  const [username, setUsername] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [inputError, setInputError] = useState<InputErrorType>('');

  const [isSendingPost, setIsSendingPost] = useState(false);

  const { createPost, editPost } = usePosts();

  const validateInputs = async () => {
    !username? setInputError('username')
    :!title? setInputError('title')
    :!body? setInputError('body')
    :setInputError('default')
  }

  const validateInputsEdit = async () => {
    !title? setInputError('title')
    :!body? setInputError('body')
    :setInputError('default')
  }

  async function handleCreateNewPost(){
    await validateInputs();
    
    if(isSendingPost ||!title || !body || !username){
      return;
    }

    setIsSendingPost(true);
    const data: PostInputsType = {
      username,
      title,
      body
    }
    try {
      await createPost(data);
      setUsername('');
      setTitle('');
      setBody('');
      setIsSendingPost(false);
      onModalClose();
      
    } catch (error) {
      setIsSendingPost(false);
      console.log(error);
    }
  }

  async function handleEditPost() {
    await validateInputsEdit();

    if(isSendingPost ||!title || !body || !post){
      return;
    }
    setIsSendingPost(true);

    const data: PostInputsType = {
      username: post.username,
      title,
      body
    }

    try {
      if(post) await editPost(data, post);

      setTitle('');
      setBody('');
      onModalClose();
      
    } catch (error) {
      setIsSendingPost(false);
      console.log(error);
    }

    setIsSendingPost(false);
  }

  return (
    <Container>
        <HeaderFrom 
          onPress={onModalClose}
        >
          <X weight="bold"  />
        </HeaderFrom>
        <TitleContainer>
          <Title>
            {post?post.username:'Create a new Post'}
          </Title>
        </TitleContainer>

      <InputContainer>
        {
          !post && <TextInput 
            isEmpty={inputError === 'username'}
          autoCorrect={false}
          spellCheck={false}
          placeholder="UserName"
          placeholderTextColor={theme.colors.text_secondary}
          selectionColor={theme.colors.brand}
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
        }
       

        <TextInput 
          isEmpty={inputError === 'title'}
          autoCorrect={false}
          placeholder="Title"
          placeholderTextColor={theme.colors.text_secondary}
          selectionColor={theme.colors.brand}
          value={title}
          onChangeText={(value) => setTitle(value)}
        />
        
        <InputBody 
          isEmpty={inputError === 'body'}
          autoCorrect={false}
          multiline
          placeholder="Write your Body. It can be long, or short. Depends on what you have to say."
          placeholderTextColor={theme.colors.text_secondary}
          selectionColor={theme.colors.brand}

          value={body}
          onChangeText={(value) => setBody(value)}
        />
      </InputContainer>

      <Footer>
        <Button 
          title={post? 'Editar': 'Enviar'}
          isLoading={isSendingPost}
          onPress={post? handleEditPost :handleCreateNewPost}
        />
      </Footer>
    </Container>
  )
}