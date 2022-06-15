import { DotsThreeVertical } from 'phosphor-react-native';
import { Container, Title, TitleContainer, Clickable } from './styles';

export function Header() {
  return(
    <Container>
      <TitleContainer>
        <Title>ClickPost</Title>
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