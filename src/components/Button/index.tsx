import { useContext } from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { ThemeContext } from "styled-components";

import { Container, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps{
  isLoading: boolean;
  title: string;
}

export function Button({isLoading, title, onPress}: ButtonProps) {
  const { colors } = useContext(ThemeContext);
  return (
    <Container
      onPress={onPress}
    >
      {
        isLoading? 
          <ActivityIndicator 
            color={colors.text_on_brand_color}
          />
        :
          <TextButton>
            {title}
          </TextButton>
      }
    </Container>
  );
}