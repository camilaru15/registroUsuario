/*para guardar un estado se usa usestate */
import React, { useState } from 'react';
import { Button,View,StyleSheet,TextInput,ScrollView,} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import firebase from '../../database/firebase';
import styles from './styles';

const AddUserScreen = (props) => {
  const initalState = {
    name: "",
    email: "",
    phone: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === '') {
      alert('please provide a name');
    } else {

      try {
        await firebase.db.collection('users').add({
          name: state.name,
          email: state.email,
          phone: state.phone,
        });

        props.navigation.navigate('UsersList');
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Name'
          onChangeText={(value) => handleChangeText(value, 'name')}
          value={state.name}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder='Email'
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, 'email')}
          value={state.email}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder='phone'
          onChangeText={(value) => handleChangeText(value, 'phone')}
          value={state.phone}
        />
      </View>

      <View style={styles.button}>
        <Button title="Save User" onPress={() => saveNewUser()} color="#2A9D8F" />
      </View>
    </ScrollView>
  );
};



export default AddUserScreen;