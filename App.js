import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import OtpScreen from './screens/OtpScreen';
import EduOne from './screens/EduOne';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

function App(){
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen options={{
          headerLeft: null
        }} name="EduOne" component={EduOne}/>
        </Stack.Navigator>

        
        
    </NavigationContainer>
  );
}


export default App;