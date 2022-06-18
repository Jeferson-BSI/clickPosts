import Modal from 'react-native-modal';
import styled from 'styled-components/native';

export const Container = styled(Modal)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  background: ${props => props.theme.colors.confirmationModal};
  border-radius: 15px;
  width: 100%;
  height: 20%;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 70%;
  padding: 20px 0;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.confirmationModalWhite};
  font-size: 20px;
`;

export const Body = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.confirmationModalBody};
  font-size: 16px;
  text-align: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 30%;
  align-items: center;

  border-top-width: 1px;
  border-color: ${props => props.theme.colors.border};

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
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.confirmationModalWhite};
  font-size: 20px;
`;

export const LineCenter = styled.Text`
  border-left-width: 1px;
  height:100%;
  border-color:${props => props.theme.colors.border};
;`