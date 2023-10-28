import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 400,
      height: 400,
      resizeMode: 'cover',
    },
    button: {
      position: 'absolute',
      top:620,
      right:10,
      backgroundColor: '#573AFF',
      padding: 10,
      borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
    addTaskButton:{
      position: 'absolute',
      top:560,
      right:10,
      backgroundColor: '#573AFF',
      padding: 10,
      borderRadius: 10,
    },  
      camera: {
        flex: 5,
        borderRadius: 20,
      },
      topControls: {
        flex: 1,
      }
  });

  export default styles