import { useUsers, UserType } from '../../hooks/UseUsers';
import{ useContext, useEffect, useState } from 'react';
import { RootStackParams } from '../../routes/stackRouter';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { SelectedThemeMode } from '../../components/SelectedThemeMode';

import { 
  FontAwesome, 
  MaterialCommunityIcons, 
  EvilIcons,
  MaterialIcons,
  Feather
} from '@expo/vector-icons';


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
import { ThemeContext } from 'styled-components';

const defaultUser ={ 
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
    }
}

export function Profile() {

  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParams>>();
  const userId  = route?.params?.userId; 
  const username =  route?.params?.username;  

  const { colors } = useContext(ThemeContext);
  
  const [user, setUser] = useState<UserType>(defaultUser as UserType);
  const [isOpenOptionMode, setIsOpenOptionMode] = useState(false);


  const { getUser } = useUsers();

  function handleCloseOptionMode(){
    setIsOpenOptionMode(false);
  }

  function handleOpenOptionMode(){
    setIsOpenOptionMode(true);
  }

  useEffect(() => {
    if(userId){
      getUser(userId)
      .then(response => {
        if(response){
          setUser(response) 
        }
      })
    }
  }, [userId]);

  return (
    <Container>
      <Header title='Profile' onOpenOptionsMode={handleOpenOptionMode}>
        <HeaderButton 
          activeOpacity={0.7} 
          onPress={() => navigation.goBack()} 
        >
          <Feather name="arrow-left" size={28} color={colors.brand} />
        </HeaderButton>
      </Header>
      <Banner/>
      <Image 
          resizeMethod="scale"
          source={{
          uri: `https://i.pravatar.cc/150?img=${user.username}`,
        }}
      />
      <ContainerUser>
        <TextName>{user.username ?? username }</TextName>
        <ContentArea>
          <Info>
            <FontAwesome name="user-o" size={25} color={colors.iconsProfile}/>
            <Label>{user.name}</Label>
          </Info>
           <Info>
            <MaterialCommunityIcons name="email-outline" size={25} color={colors.iconsProfile}/>
            <Label>{user.email}</Label>
          </Info>
          <Info>
            <MaterialCommunityIcons name="phone-outline" size={25} color={colors.iconsProfile}/>
            <Label>{user.phone}</Label>
          </Info>
          <Info>
            <MaterialCommunityIcons name="web" size={25} color={colors.iconsProfile}/>
            <Label>{user.website}</Label>
          </Info>
            <Info>
            <MaterialIcons name="work-outline" size={25} color={colors.iconsProfile}/>
              <Label>{user.company?.name}</Label>
            </Info>

          <Info>
            <EvilIcons name="location" size={25} color={colors.iconsProfile}/>
            <Label address={true}>
              {
                `${user.address?.street}, R. ${user.address?.street}, ${user.address?.city}`
              }
            </Label>
          </Info>
        </ContentArea>
      </ContainerUser>
      
      { isOpenOptionMode &&
        <SelectedThemeMode 
          dark='Dark' 
          light='Light' 
          onCloseOptionsMode={handleCloseOptionMode}
        />
      }
    </Container>
  );
};