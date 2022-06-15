import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { 
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold

} from '@expo-google-fonts/roboto';

import { Home } from './src/pages/Home'; 
import { theme } from './src/theme';

export default function App() {

    SplashScreen.preventAutoHideAsync();
    let [fontsLoaded] = useFonts({  
      Roboto_400Regular,
      Roboto_500Medium,
      Roboto_700Bold 
    });

    if(!fontsLoaded) {
      return null;
    }

    SplashScreen.hideAsync();

  return (
    <View
      style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}
    >
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </View>
  )
};
