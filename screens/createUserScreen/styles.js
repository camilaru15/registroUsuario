import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#ffffff'
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default styles;