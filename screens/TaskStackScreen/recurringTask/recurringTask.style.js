import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20,
    },
    heading:{
        fontSize: 16,
        fontWeight: "bold",
    },
    input:{
        backgroundColor: "#FBFBFB",
        borderColor:'#FBFBFB',
        borderWidth: 1,
        padding: 10,
        margin:10,
        borderRadius:5
    },
    description:{
        backgroundColor: "#FBFBFB",
        borderColor:'#FBFBFB',
        borderWidth: 1,
        padding: 10,
        margin:10,
        borderRadius:5,
        height:100,
        textAlignVertical: 'top',
    },
    dateContainer :{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        columnGap:5
    },
    button: {
        position: 'absolute',
        bottom:40,
        right:10,
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