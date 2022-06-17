import { ReactNode } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import { 
  BottomSheetContainer, 
  modal, 
  indicator  
} from './styles';

type BottomSheetProps = {
  children: ReactNode;
  bottomSheetRef: React.Ref<BottomSheetMethods>;
}

export function BottomSheetComponent({bottomSheetRef, children }: BottomSheetProps) {

  return (
      <BottomSheetContainer
        ref={bottomSheetRef}
        snapPoints={[1, '60%']} 
        backgroundStyle={modal}
        handleIndicatorStyle={indicator}
        enableContentPanningGesture
      >
        { children }
      </BottomSheetContainer>
  );
}


