
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './components/loginScreen';
import RegisterScreen from './components/signup';
import WelcomeScreen from './components/welcome';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="WelcomeScreen"

      screenOptions={{
        headerShown: false
      }}

      >
        <Stack.Screen name="LoginScreen" component={LoginScreen}
      
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} 
      
        />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} 
       
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
