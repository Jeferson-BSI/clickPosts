import { ActivityIndicator, TouchableOpacityProps } from "react-native";

import { theme } from "../../theme";
import { Container, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps{
  isLoading: boolean;
  title: string;
}

export function Button({isLoading, title, onPress}: ButtonProps) {
  return (
    <Container
      onPress={onPress}
    >
      {
        isLoading? 
          <ActivityIndicator 
            color={theme.colors.text_on_brand_color}
          />
        :
          <TextButton>
            {title}
          </TextButton>
      }
    </Container>
  );
}