import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '90%',
      height: '70%',
      resizeMode: 'cover',
    },
    button: {
      position: 'absolute',
      top:620,
      right:10,
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      }
  });

  export default styles