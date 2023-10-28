import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from "react-native";

import styles from "./recurringContainer.style";

const RecurringContainer=({month,employees})=>
{
    const [selectedEmployees,setSelectedEmployees]=useState([]);

    const clickHandler=(employee)=>
    {
        if(selectedEmployees.includes(employee))
        {
            setSelectedEmployees(prev=>prev.filter(item=>item!==employee))
        }
        else{
            setSelectedEmployees(prev=>[...prev,employee]);
        }
    }
    return (
        <View style={styles.recurringContainer}>
                <TouchableOpacity style={styles.recurringButton}>
                    <Text style={{color:'white',textAlign:'center'}}>{month}</Text>
                    </TouchableOpacity>   
                <FlatList data={employees}
                renderItem={({item})=>(
                <TouchableOpacity style={styles.tab(selectedEmployees,item.name)} 
                onPress={()=>{
                    clickHandler(item.name);
                }}
                >
                    <Text style={styles.tabText(selectedEmployees,item.name)}>{item.name}</Text>
                </TouchableOpacity>
                )}
                keyExtractor={item=>item.name} 
                contentContainerStyle={{columnGap:6}}
                horizontal
                />
                </View>
    )
}

export default RecurringContainer;