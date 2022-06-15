import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  width: 100%;
  padding: 10px 8px;
  margin-bottom: 10px;

  border-bottom-width: 1px;
  border-color: #E3E3E3;
`;


export const HeaderPost = styled.View`
  flex-direction: row;
  align-items: center;
  width: 23.6%;
  margin-bottom: 3px;

  background:rgba(221, 221, 221, 0.8);
  padding: 2px 8px;
  border-radius: 6px;
`;

export const TextName = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.bold};
  font-style: normal;
  color: ${theme.colors.black};
`;

export const Time = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.text_secondary};
  margin-left: 10px;
`;


export const Content = styled.View`
  margin-left: 16px;
  margin-bottom: 8px;
  padding: 5px 5px;


`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.text_secondary};
  margin-bottom: 6px;
`;

export const Body = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.regular};
  font-style: normal;
  text-align: justify;
  line-height: 17px;
  letter-spacing: -0.2px;
  color: ${theme.colors.text_primary};
`;


export const Clickable = styled.TouchableOpacity``;

export const FooterPost = styled.View`
  border-width: 1px;
  border-color: #E3E3E3;
  border-radius: 8px;
  width: 50%;
  align-self: center;

  flex-direction:row;
  align-items: center;
  justify-content: space-around;

  padding: 10px;
`;