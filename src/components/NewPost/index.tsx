import { useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetComponent } from '../BottomSheetComponent';

import { Form } from '../Form';
import { Plus } from 'phosphor-react-native';
import { theme } from '../../theme';

import { 
  Container, 
  BottomSheetContainer, 
  modal, 
  indicator  
} from './styles';



export default function NewPost() {
  const bottomSheetRef = useRef<BottomSheet>(null);

 function handleOpen() {
    bottomSheetRef.current?.expand()
  }

   function handleClose() {
    bottomSheetRef.current?.close()
  }

  return (
    <>
      <Container 
        activeOpacity={0.5}
        onPress={handleOpen}
      >
        <Plus 
          weight='bold'
          size={25}
          color={theme.colors.white}
        />
      </Container>

      <BottomSheetComponent
        bottomSheetRef={bottomSheetRef}
      >
        <Form onModalClose={handleClose}/>
      </BottomSheetComponent>
      {/* <BottomSheetContainer
        ref={bottomSheetRef}
        snapPoints={[1, '60%']} 
        backgroundStyle={modal}
        handleIndicatorStyle={indicator}
        enableContentPanningGesture
      >
        <Form onModalClose={handleClose}/>
      </BottomSheetContainer> */}
    </>
  );
}


