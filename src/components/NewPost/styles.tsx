import styled from "styled-components/native";
import { getBottomSpace } from 'react-native-iphone-x-helper';

import BottomSheet from "@gorhom/bottom-sheet";


export const Container = styled.TouchableOpacity`
  flex:1 ;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.brand};

  width: 50px;
  height: 50px;
  border-radius: 24px; 

  position: absolute;
  right: 16px;
  bottom: ${getBottomSpace() + 30}px;
`;

export const BottomSheetContainer = styled(BottomSheet)`
  position: relative;

  padding-bottom: ${getBottomSpace() + 16}px;
`;
