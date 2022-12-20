import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import IconButton from '../components/IconButton'

const HomeScreen = ( { navigation } ) => {
  return (
    <View style = {styles.container}>
    <ImageBackground
      source={require('../assets/Gatos-5.png')}
      style = {{
        flex: 1,
        resizeMode: 'strech',
        padding: 10,
      }} 
    >
      <IconButton 
      navigation={navigation}
      href="Post"
      icon_name="profile"
      icon_size={24}
      icon_color="white"
      text="Detalles" />

      <IconButton 
      icon_name="star"
      icon_size={24}
      icon_color="white"
      text="Favoritos" />

      <IconButton 
      icon_name="setting"
      icon_size={24}
      icon_color="white"
      text="Configuración avanzada" />
      </ImageBackground>
    </View>
  );
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#900C3F",
    alignItems: "",
    flexDirection: 'column',
  }
});