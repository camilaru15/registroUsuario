import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//components
import UsersList from './screens/UserList/UsersList';
import CreateUserScreen from './screens/createUserScreen/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen/UserDetailScreen';
//style

const Stack = createNativeStackNavigator()

function MyStack() {
  return (
   <Stack.Navigator
   screenOptions={{
    headerStyle: {
      backgroundColor: "#621FF7",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }}
   >
    <Stack.Screen name="UserList"
     component={UsersList}
      options={{titles: 'Users list'}}
      style={styles.container}  
    />
    <Stack.Screen name="CreateUserScreen" 
    component={CreateUserScreen} 
    options={{title: 'Create a New User'}}/>
    <Stack.Screen name="UserDetailScreen"
     component={UserDetailScreen}
      options={{titles: 'User Detail'}}/>
   </Stack.Navigator>
  );
 }
 

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>

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