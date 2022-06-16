import { useState } from 'react';
import { X } from 'phosphor-react-native';

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


export function Form({ onModalClose }: FormProps) {
  const [name, setName] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

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
          value={name}
          onChangeText={(value) => setName(value)}
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
          onPress={()=>{}}
        />
      </Footer>
    </Container>
  )
}