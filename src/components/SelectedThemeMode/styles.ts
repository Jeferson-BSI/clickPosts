import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const ContainerThemeMode = styled.View`
  position: absolute;
  width: 100px;
  height: 10%;
  right: 5%;
  top: 10.3%;

  background: ${props => props.theme.colors.modeBackground};
  border-width: 1px;
  border-color: ${props => props.theme.colors.modeBorde};

  border-radius: 8px;
`;

export const ThemeMode = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  
  width: 100%;
  border-top-width: 1px;
  border-color: ${props => props.theme.colors.border};
`;

export const TextMode = styled.Text`
  font-size: 18px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.modeText};
  margin-left: 10%;
  margin-right: 10px;
`;