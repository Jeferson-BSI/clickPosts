import BottomSheet from '@gorhom/bottom-sheet';
import { PostType } from '../../hooks/usePosts';
import { BottomSheetComponent } from '../BottomSheetComponent';

import { Form } from '../Form';

type EditPostProps = {
  bottomSheetRef: React.Ref<BottomSheet>;
  onHandleClose: () => void;
  post: PostType;
}

export default function EditPost({ bottomSheetRef, onHandleClose, post }: EditPostProps) {

  //  function handleClose() {
  //   bottomSheetRef.current?.expand()
  // }

  return (


      <BottomSheetComponent
        bottomSheetRef={bottomSheetRef}
      >
        <Form onModalClose={onHandleClose} post={post}/>
      </BottomSheetComponent>

  );
}


