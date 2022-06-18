import { DotsThreeVertical } from 'phosphor-react-native';
import { ReactNode } from 'react';
import { Container, Title, TitleContainer, Clickable } from './styles';

type HeaderPros = {
  title: string;
  children?: ReactNode;
}

export function Header({ title, children }: HeaderPros) {
  return(
    <Container>
      {children}
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      
      <Clickable>
        <DotsThreeVertical 
          size={28}
          weight="bold" 
        />
      </Clickable>
    </Container>
  )
};