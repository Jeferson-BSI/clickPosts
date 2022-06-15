import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  justify-content: center;
  align-items: center;

  height: 44px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 10px;

  border-bottom-width: 1px;
  border-color: #E3E3E3;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.blue};
  font-style: normal;

  /* line-height: 17px; */
  /* letter-spacing: -0.280341px; */
`;