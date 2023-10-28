import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   
    button: {
        position: 'absolute',
        top:590,
        right:0,
        backgroundColor: '#573AFF',
        padding: 10,
        borderRadius: 10,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      },
    visibleButton:{
        backgroundColor:'#573AFF',
        padding: 10,
        borderRadius: 10,
        marginTop:10,
        marginBottom:5
    },
    visibleContainer:{
        display:'flex',
        justifyContent:'space-evenly',
        flexDirection:'row'
    },
    notVisible:{
        backgroundColor:'#FBFBFB',
        borderColor:'gray',
        padding: 10,
        borderRadius: 10,
        marginTop:10
    },
    recurringContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignContent:'center'
    },
    recurringButton:{
        backgroundColor:'#573AFF',
        padding: 10,
        borderRadius: 10,
        marginTop:10,
        marginBottom:10,
        marginRight:50,
        width:100,
        textAlign:'center'
    },
    tab: (selectedEmployees, item) => {
        if(selectedEmployees.includes(item))
      return {paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: '#573AFF',
      marginTop:10,
      marginBottom:10
    }
      else{
        return {paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: 'gray',
            marginTop:10,
            marginBottom:10

        }
      }
    },
    tabText: (selectedEmployees, item) => {
        if(selectedEmployees.includes(item))
      return {
      color: '#573AFF'}
      else{
        return {
            color: 'gray'

        }
      }
    },
})

export default styles