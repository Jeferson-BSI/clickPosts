import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

export const ScrollList = styled.FlatList`
  flex: 1;
  width: 97%;
  padding: 16px 0;
`;

export const IsLoading = styled.ActivityIndicator`
  flex: 1;
  justify-content: center; 
  align-items: center;
  margin-bottom:  50px;
`;
