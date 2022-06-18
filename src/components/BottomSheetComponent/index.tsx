import { ReactNode, useContext } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import { 
  BottomSheetContainer, 
  modal, 
  indicator  
} from './styles';
import { ThemeContext } from 'styled-components';

type BottomSheetProps = {
  children: ReactNode;
  bottomSheetRef: React.Ref<BottomSheetMethods>;
}

export function BottomSheetComponent({bottomSheetRef, children }: BottomSheetProps) {

  const { colors } = useContext(ThemeContext);

  return (
      <BottomSheetContainer
        ref={bottomSheetRef}
        snapPoints={[1, '60%']} 
        backgroundStyle={[modal, {backgroundColor: colors.bottomSheetBackground}]}
        handleIndicatorStyle={[indicator, { backgroundColor: colors.brand}]}
        enableContentPanningGesture
      >
        { children }
      </BottomSheetContainer>
  );
}


