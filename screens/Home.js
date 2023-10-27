import React, { useState, useEffect, useRef } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from 'expo-media-library'
import { useNavigation } from '@react-navigation/native';

import styles from "./home.style";

import * as ImagePicker from 'expo-image-picker';

const Home = () => {
  const imgLink = 'https://geeksretreat.files.wordpress.com/2013/09/css3-message-board-with-sticky-notes.png';

  const [selectedImage, setSelectedImage] = useState(null);

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate("ImageFullScreen")}>
          <Image source={{ uri: selectedImage || imgLink }} style={styles.image} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
