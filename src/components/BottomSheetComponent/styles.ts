import styled from "styled-components/native";
import { getBottomSpace } from 'react-native-iphone-x-helper';
import BottomSheet from "@gorhom/bottom-sheet";

export const BottomSheetContainer = styled(BottomSheet)`
  position: relative;

  padding-bottom: ${getBottomSpace() + 16}px;
`;

export const modal = {
  paddingBottom: getBottomSpace() + 16
}

export const indicator = {
  width: 56
}