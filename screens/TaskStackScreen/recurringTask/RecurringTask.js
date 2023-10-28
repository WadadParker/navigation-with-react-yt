import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Pressable } from "react-native";
import { format } from "date-fns";

import { getAllUsers, createTask } from "../../../services/userServices";
import { useData } from "../../../context/AppContext";

import styles from "./recurringTask.style";
import { MaterialIcons } from '@expo/vector-icons';

import RecurringContainer from "../../../components/recurringContainer/RecurringContainer";

const RecurringTaskForm = () =>
{
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [visibleToAll,setVisibleToAll] = useState(true);

    const {state:{employees},dispatch}=useData();

    const [selectedEmployees,setSelectedEmployees]=useState([]);

    const [input,setInput] = useState({title:"",description:"",subTask:"",organization:"653b0d62eb810f1f3e64ce84",taskType:"One Time"})

    const postClickHandler=()=>
    {
        const assignedEmployees = employees.filter(employee => 
            selectedEmployees.includes(employee.name)
        );
        const assignees = assignedEmployees.map((employee)=>({_id:employee._id}));

        createTask({title:input.title,description:input.description,dueDate:date,organization:input.organization,taskType:input.taskType,assignees:assignees
        ,showToAll:visibleToAll});
        setInput({title:"",description:"",dueDate:"",organization:"653b0d62eb810f1f3e64ce84",taskType:"One Time"});
        setSelectedEmployees([]);
    }

    const inputChange=(inputField,text)=>
    {
        setInput(prev=>({...prev,[inputField]:text}));
    }
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    const displayDayMonthAndTime = () => {
        const day = date.getDate();
        const monthName = format(date, "MMMM");
        const hours = date.getHours();
        const minutes = date.getMinutes();
    return `${day} ${monthName} by ${hours}:${minutes}`;
      };

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

    useEffect(()=>{getAllUsers(dispatch)},[]);  

    return (
        <SafeAreaView style={{backgroundColor:'white', flex:1}}>
            <ScrollView >
            <View style={styles.container}>
                <Text style={styles.heading}>New Task</Text>
                <TextInput placeholder="Add a Title" style={styles.input} value={input.title} onChangeText={(text)=>inputChange("title",text)}/>
                <TextInput placeholder="Add a Description" style={styles.description} value={input.description} onChangeText={(text)=>inputChange("description",text)}/>

                <Text style={styles.heading}  > Sub Task </Text>
                <TextInput placeholder="Add a Subtask" value={input.subTask} onChangeText={(text)=>inputChange('subTask',text)} style={styles.input}/>

                <Text style={styles.heading}>Task Deadline</Text>
                <View style={styles.dateContainer}>
                <TouchableOpacity onPress={showDatepicker}  style={styles.visibleButton}>
                    <Text style={{color:'white'}}>Select Date</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimepicker}  style={styles.visibleButton}>
                    <Text style={{color:'white'}}>Select Time</Text>
                </TouchableOpacity>
                
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={false}
                    onChange={onChange}
                    />
                )}
                </View>
                <Text>Deadline: {displayDayMonthAndTime()}</Text>
                <Text style={styles.heading}>Assign Employees</Text>
            


                <RecurringContainer month={"Monday"} employees={employees}/>
                <RecurringContainer month={"Tuesday"} employees={employees}/>
                <RecurringContainer month={"Wednesday"} employees={employees}/>
                <RecurringContainer month={"Thursday"} employees={employees}/>
                <RecurringContainer month={"Friday"} employees={employees}/>
                <RecurringContainer month={"Saturday"} employees={employees}/>
                <RecurringContainer month={"Sunday"} employees={employees}/>

                

                <Text style={styles.heading}>Visibility</Text>
                <View style={styles.visibleContainer}>
                    <TouchableOpacity style={ visibleToAll? styles.visibleButton :styles.notVisible} onPress={()=>setVisibleToAll(true)}>
                        <Text style={visibleToAll?{color:'white'}:{color:'black'}}>Visible to All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ visibleToAll?styles.notVisible: styles.visibleButton} onPress={()=>setVisibleToAll(false)}>
                        <Text style={visibleToAll?{color:'gray'}:{color:'white'}}>Visible to Assignees</Text>
                    </TouchableOpacity>
                </View>
                
                 
                
                   
            </View>
            <TouchableOpacity style={styles.button} onPress={postClickHandler}>
                    <MaterialIcons name="post-add" size={24} color="white" />
                    <Text style={{color:'white'}}>Post</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RecurringTaskForm;

// Multi select daalna hai