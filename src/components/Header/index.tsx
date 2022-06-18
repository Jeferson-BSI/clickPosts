import { DotsThreeVertical } from 'phosphor-react-native';
import { ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { 
  Container, 
  Title, 
  TitleContainer, 
  Clickable,

} from './styles';

type HeaderPros = {
  title: string;
  children?: ReactNode;
  onOpenOptionsMode: () => void;
}

export function Header({ title, children, onOpenOptionsMode }: HeaderPros) {
  const { colors } = useContext(ThemeContext);

  return(
    <Container>
      {children}
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      
      <Clickable
        onPress={onOpenOptionsMode}
      >
        <DotsThreeVertical 
          size={30}
          weight="bold"
          color={colors.iconsProfile}
        />
      </Clickable>
    </Container>
  )
};