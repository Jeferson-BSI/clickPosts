import { theme } from './../../theme/index';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

export const Container = styled(Modal)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  background: ${theme.colors.white};
  border-radius: 15px;
  width: 100%;
  height: 20%;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-around;
  background: ${theme.colors.white};
  height: 70%;
  padding: 20px 0;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.textTitle};
  font-size: 20px;
`;

export const Body = styled.Text`
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.textBody};
  font-size: 16px;
  text-align: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 30%;
  align-items: center;

  border-top-width: 1px;
  border-color: ${theme.colors.border};

`;

export const Clickable = styled.TouchableOpacity`
  width: 50%;
  height: 100% ;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.textTitle};
  font-size: 20px;
`;

export const LineCenter = styled.Text`
  border-left-width: 1px;
  height:100%;
  border-color:${theme.colors.border};
;`