import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.View`
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.banner};
  width: 100%;
  height: 20%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const Image = styled.Image`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;

  top: 160px;
  right: 32%;
  z-index: 99;

  border-radius: 100px;
`;

export const ContainerUser = styled.View`
  margin-top: 25px;
  align-items: center;
  justify-content: center;
`;

export const TextName = styled.Text`
    font-size: 20px;
    font-family: ${props => props.theme.fonts.bold};
    color: ${props => props.theme.colors.userTitle};
`;

export const ContentArea = styled.View`
  margin-top: 30px;
  width: 100%;
  padding: 0 14px;
  justify-content: center;
`;


export const Info = styled.View`
  padding: 10px ;
  flex-direction: row;
  margin-bottom: 10px;

  border-radius: 4px ;
  border-width: 1px;
  border-color: ${props => props.theme.colors.stroke};
`;

interface LabelProps {
  address?: boolean;
}
export const Label = styled.Text<LabelProps>`
  padding: 0 10px ;
  font-size: ${({ address }) => (address? '16px': '18px') };
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.label};
  margin-left: 10px;

  border-left-width: 1px;
  border-color: ${props => props.theme.colors.stroke};
`;