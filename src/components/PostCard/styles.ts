import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 10px 8px;
  margin-bottom: 8px;
  border-radius: 10px;

  background: ${props => props.theme.colors.cardBackground};
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const UserContainer = styled.TouchableOpacity`
  align-items: center;
  padding: 0px 15px;
  background: ${props => props.theme.colors.userBackground};

  border-radius: 5px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.border};
`;

export const TextName = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.userTitle};
`;

export const Time = styled.Text`
  font-size: 12px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.timeColor};
  margin-left: 5px;
`;


export const Content = styled.View`
  margin-left: 16px;
  padding: 5px 5px;
`;
export const Line = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.line};
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text_secondary};
  margin-bottom: 8px;
`;

export const Body = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.regular};
  text-align: justify;
  line-height: 17px;
  letter-spacing: -0.2px;
  color: ${props => props.theme.colors.text_primary};
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