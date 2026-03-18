import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from "./Screens/WelcomeScreen";
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './Screens/ScoreScreen';
import RollingScreen from './Screens/RollingScreen';

export default function App() {

  const Stack=createNativeStackNavigator();

  return<NavigationContainer>

    <Stack.Navigator>
       <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
       <Stack.Screen name="Game" component={MainPage}options={{headerShown:false}}/>
       <Stack.Screen name="Roll" component={RollingScreen}options={{headerShown:false}}/>

    </Stack.Navigator>
  </NavigationContainer>

}

