/*para guardar un estado se usa usestate */
import React, {useState} from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';

const CreateUserScreen = () => {

  const[state, setState] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleChangeText = (name, value) => {
    setState({...state,name: value})
  }

  const addNewUser = () => {}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Name User" onChangeText={(value) => handleChangeText('name', value)}></TextInput>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="EmailUser"  onChangeText={(value) => handleChangeText('email', value)}></TextInput>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Phone User"  onChangeText={(value) => handleChangeText('email', value)}></TextInput>
      </View>
      <View>
        <Button title="Save User" onPress={() => }/>
      </View>
    </ScrollView>

  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },

  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  }
});


export default CreateUserScreen