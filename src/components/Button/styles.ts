import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.brand};
  height: 40px;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text_on_brand_color}
`;