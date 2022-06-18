import { useContext, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetComponent } from '../BottomSheetComponent';

import { Form } from '../Form';
import { Plus } from 'phosphor-react-native';

import { 
  Container, 
} from './styles';
import { ThemeContext } from 'styled-components';



export default function NewPost() {
  const { colors } = useContext(ThemeContext);

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
          color={colors.white}
        />
      </Container>

      <BottomSheetComponent
        bottomSheetRef={bottomSheetRef}
      >
        <Form onModalClose={handleClose}/>
      </BottomSheetComponent>
    </>
  );
}


