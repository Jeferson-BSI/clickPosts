import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetComponent } from '../BottomSheetComponent';
import { PostType } from '../../hooks/usePosts';

import { Form } from '../Form';

type EditPostProps = {
  bottomSheetRef: React.Ref<BottomSheet>;
  onHandleClose: () => void;
  post: PostType;
}

export default function EditPost({ 
  bottomSheetRef, 
  onHandleClose, 
  post,
}: EditPostProps) {

  return (
      <BottomSheetComponent
        bottomSheetRef={bottomSheetRef}
      >
        <Form onModalClose={onHandleClose} post={post}/>
      </BottomSheetComponent>

  );
}


