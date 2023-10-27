import { View,Text,SafeAreaView, Image, TouchableOpacity } from "react-native";

import styles from "./home.style";

const Home = () =>
{
    const imgLink = 'https://geeksretreat.files.wordpress.com/2013/09/css3-message-board-with-sticky-notes.png';
    return (
        <SafeAreaView>
            <View style={styles.container}>
               
                <Image source={{uri:imgLink}} style={styles.image}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Upload Image</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home
