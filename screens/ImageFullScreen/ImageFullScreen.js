// ImageFullScreen.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const ImageFullScreen = () => {
    const imgLink = 'https://geeksretreat.files.wordpress.com/2013/09/css3-message-board-with-sticky-notes.png';
    const navigation = useNavigation();
    const route = useRoute();

    useLayoutEffect(()=>{
        navigation.setOptions
    })

  return (
    <View style={styles.container}>
      <Image source={{ uri: imgLink }} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default ImageFullScreen;
