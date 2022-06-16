import styled from "styled-components/native";
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from "../../theme";
import BottomSheet from "@gorhom/bottom-sheet";


export const Container = styled.TouchableOpacity`
  flex:1 ;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.brand};

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


export const modal = {
  backgroundColor: theme.colors.lightGray,
  paddingBottom: getBottomSpace() + 16

}

export const indicator = {
  backgroundColor: theme.colors.brand,
  width: 56
}