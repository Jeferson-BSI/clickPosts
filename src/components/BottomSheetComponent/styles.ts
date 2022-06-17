import styled from "styled-components/native";
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from "../../theme";
import BottomSheet from "@gorhom/bottom-sheet";

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