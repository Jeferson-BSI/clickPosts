import { Header } from '../../components/Header';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { 
  FontAwesome, 
  MaterialCommunityIcons, 
  EvilIcons,
  MaterialIcons,
  Feather
} from '@expo/vector-icons';

import { theme } from '../../theme';
import { useUsers, UserType } from '../../hooks/UseUsers';
import { useEffect, useState } from 'react';
import { RootStackParams } from '../../routes/stackRouter';

import {
  Container,
  Banner,
  Image,
  ContentArea,
  TextName,
  ContainerUser,
  Info,
  Label,
  HeaderButton
} from './styles';

export function Profile() {

  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParams>>();
  const userId  = route?.params?.userId;  
  
  const [user, setUser] = useState<UserType>({} as UserType);
  const { getUser } = useUsers();

  useEffect(() => {
    if(userId){
      getUser(userId)
      .then(response => {
        if(response)
        setUser(response) 
      })
    }
  }, [userId]);

  return (
    <Container>
      <Header title='Profile'>
        <HeaderButton 
          activeOpacity={0.7} 
          onPress={() => navigation.goBack()} 
        >
          <Feather name="arrow-left" size={28} color={theme.colors.brand} />
        </HeaderButton>
      </Header>
      <Banner/>
      <Image 
          resizeMethod="scale"
          source={{
          uri: `https://source.unsplash.com/random/?person`,
        }}
      />
      <ContainerUser>
        <TextName>{user.username}</TextName>
        <ContentArea>
          <Info>
            <FontAwesome name="user-o" size={25} color={theme.colors.stroke}/>
            <Label>{user.name}</Label>
          </Info>
           <Info>
            <MaterialCommunityIcons name="email-outline" size={25} color={theme.colors.stroke}/>
            <Label>{user.email}</Label>
          </Info>
          <Info>
            <MaterialCommunityIcons name="phone-outline" size={25} color={theme.colors.stroke}/>
            <Label>{user.phone}</Label>
          </Info>
          <Info>
            <MaterialCommunityIcons name="web" size={25} color={theme.colors.stroke}/>
            <Label>{user.website}</Label>
          </Info>
            <Info>
            <MaterialIcons name="work-outline" size={25} color={theme.colors.stroke}/>
              <Label>{user.company?.name}</Label>
            </Info>

          <Info>
            <EvilIcons name="location" size={25} color={theme.colors.stroke}/>
            <Label address={true}>
              {
                `${user.address?.street}, R. ${user.address?.street}, ${user.address?.city}`
              }
            </Label>
          </Info>
        </ContentArea>
      </ContainerUser>
    </Container>
  );
};