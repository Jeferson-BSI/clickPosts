import { useState } from 'react';
import { X } from 'phosphor-react-native';

import { usePosts } from '../../hooks/usePosts';
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
}

type PostInputsType = {
  userName: string;
  title: string;
  body: string;
}


export function Form({ onModalClose }: FormProps) {
  const [userName, setUserName] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const [isSendingPost, setIsSendingPost] = useState(false);

  const { createPost } = usePosts();

  async function handleCreateNewPost(){
    if(isSendingPost || !userName ||!title || !body){
      return;
    }

    setIsSendingPost(true);

    const data: PostInputsType = {
      userName,
      title,
      body
    }

    try {
      await createPost(data);
      onModalClose();

      setUserName('');
      setTitle('');
      setBody('');
      
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
            Create a new Post
          </Title>
        </TitleContainer>

      <InputContainer>
        <TextInput 
          autoCorrect={false}
          spellCheck={false}
          placeholder="UserName"
          placeholderTextColor={theme.colors.text_secondary}
          selectionColor={theme.colors.brand}
          value={userName}
          onChangeText={(value) => setUserName(value)}
        />

          <TextInput 
          autoCorrect={false}
          placeholder="Title"
          placeholderTextColor={theme.colors.text_secondary}
          selectionColor={theme.colors.brand}
          value={title}
          onChangeText={(value) => setTitle(value)}
        />
        
        <InputBody 
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
          isLoading={false}
          onPress={handleCreateNewPost}
        />
      </Footer>
    </Container>
  )
}