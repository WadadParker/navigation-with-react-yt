import React , {useState} from 'react'
import { View , Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './register.style';

import { createManager } from '../../../services/userServices';
import { useData } from '../../../context/AppContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {navigate}= useNavigation();

    const {authDispatch}=useData();
  
    const handleRegister = () => {
        // This works, a manager is created from here
        // createManager({name,email,password,isManager:true},authDispatch)
        setName("");
        setEmail("");
        setPassword("");
        navigate("Organization");
    };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Register</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        textContentType='password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.text}>OR</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register by Mobile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Register;
