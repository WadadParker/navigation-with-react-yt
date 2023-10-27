import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from "./Navigation";
import AuthNavigation from "./AuthNavigation";

import { AppProvider } from "./context/AppContext";

export default function App() {

  return (
    <AppProvider>
     <Navigation />

    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
