import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  width: 100%;
  /* min-width: 380px; */
  padding: 10px 8px;
  margin-bottom: 8px;
  border-radius: 10px;

  background: ${theme.colors.white};
`;


export const HeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const UserContainer = styled.TouchableOpacity`
  align-items: center;
  padding: 0px 15px;
  background: rgba(128, 128, 128, 0.05);

  border-radius: 5px;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const TextName = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.textTitle};
`;

export const Time = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.text_secondary};
  margin-left: 5px;
`;


export const Content = styled.View`
  width: 100%;
  margin-left: 16px;
  padding: 5px 5px;

  /* border-bottom-width: 1px;
  border-color: ${theme.colors.border}; */
`;
export const Line = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.text_secondary};
  margin-bottom: 8px;
`;

export const Body = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.regular};
  text-align: justify;
  line-height: 17px;
  letter-spacing: -0.2px;
  color: ${theme.colors.text_primary};
  margin-bottom: 8px;
`;


export const FooterPost = styled.View`
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  
  width: 35%;
  margin-top: 10px;
  border-radius: 8px;
`;

export const Clickable = styled.TouchableOpacity``;