import { 
  Container, 
  Content, 
  Title, 
  Body, 
  Footer, 
  Clickable, 
  Header, 
  TextButton, 
  LineCenter 
} from "./styles";

type ConfirmationModalProps = {
  title: string;
  body?: string;
  isVisible: boolean;

  onClickOK: () => void;
  onClickCancel: () => void;
}

export function ConfirmationModal({
  isVisible,
  title, 
  body, 
  onClickOK, 
  onClickCancel
}: ConfirmationModalProps) {
  return (
    <Container 
      isVisible={isVisible}
      swipeDirection={['up','down']}
      onSwipeComplete={onClickCancel}
      useNativeDriver
      onBackdropPress={onClickCancel}
    >
      <Content>
        <Header>
          <Title>
            {title}
          </Title>
          <Body>
            {body}
          </Body>
        </Header>

        <Footer>
          <Clickable
            onPress={onClickCancel}
          >
            <TextButton>
              Cancel
            </TextButton>
          </Clickable>

          <LineCenter />

          <Clickable
            onPress={onClickOK}
          >
            <TextButton>
              OK
            </TextButton>
          </Clickable>
        </Footer>
      </Content>

    </Container>
  )
}