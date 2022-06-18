import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0px 24px;
  align-items: center ;
  
`;

export const HeaderFrom = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: -3px;
`;

export const BackButton = styled.TouchableOpacity``;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.titleModal};
  margin-top: 18px;
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  margin-bottom: 16px ;
`;

interface TextInputProps {
  isEmpty: boolean;
}

export const TextInput = styled.TextInput<TextInputProps>`
  height: 50px;
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;

  border-radius: 4px ;
  border-width: 1px;
  border-color: ${({isEmpty}) => isEmpty? 'red':  props => props.theme.colors.stroke};
  
  color: ${ props => props.theme.colors.textInput};
  font-family: ${props => props.theme.fonts.regular};
`;

export const InputBody = styled.TextInput<TextInputProps>`
  height: 112px;
  width: 100%;
  padding: 12px;
  margin-bottom: 8px;

  border-radius: 4px ;
  border-width: 1px;
  border-color: ${({isEmpty}) => isEmpty? 'red': props => props.theme.colors.stroke };
 
  
  color: ${ props => props.theme.colors.textInput};
  font-family: ${props => props.theme.fonts.regular};
`;

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 16px;
`;
