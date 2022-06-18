import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  height: 50px;
  width: 100%;
  margin-top: 50px;
  padding: 0 8px;

  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.border};
`;
export const TitleContainer = styled.View`
  flex: 1; 
  align-items: center ;
  justify-content: center;
`;


export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.bold};
  color: ${props => props.theme.colors.textTitleHeader};
`;


export const Clickable = styled.TouchableOpacity`
`;