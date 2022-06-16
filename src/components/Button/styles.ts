import styled from "styled-components/native";
import { theme } from "../../theme";


export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.brand};
  height: 40px;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.text_on_brand_color}
`;