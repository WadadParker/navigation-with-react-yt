import React , {useState} from 'react'
import { View , Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import styles from "./organization.style";
import { useData } from '../../../context/AppContext';
import { createOrganization } from '../../../services/userServices';

const Organization=()=>
{
    const [name, setName] = useState('');

    const {authState:{user}, authDispatch} = useData();

    const clickHandler=()=>
    {
        // This also works, gotta style it and give an option to upload org image, just style
        // createOrganization({name,owner:user._id},authDispatch);
        authDispatch({type:"USER_REGISTERED"});
    }


    return (
        <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.heading}>Create New Organization</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TouchableOpacity style={styles.button} onPress={clickHandler}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
  
  
      </SafeAreaView>
    )
}

export default Organization;