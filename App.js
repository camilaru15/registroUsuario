import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/*librerias*/
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

 const Stack = createNativeStackNavigator()

/*importar los Screen*/
import UsersList from './screens/UsersList';
import CreateUserScreen from './screens/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen';

/*es la funcion donde al final tendra las multiples pantallas*/ 
function myStack(){
 return (
    //contiene toda la navigation
  <Stack.Navigator>
    {/*para cada pantalle esta el stack.screen agregando el componente desde la carpeta screen*/}
    <Stack.Screen component={UsersList}/>
    <Stack.Screen component={CreateUserScreen}/>
    <Stack.Screen component={UserDetailScreen}/>
  </Stack.Navigator>
 );
}

export default function App() {
  return (
    <NavigationContainer>

    </NavigationContainer>

  );
}
/*Constante para el style*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
