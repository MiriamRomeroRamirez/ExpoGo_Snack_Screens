import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import ViewText from '../components/ViewText';
import IconButton from '../components/IconButton';

const PostScreen = ( {navigation} ) => {
  return (
    <View style = {styles.principal}>
    <ImageBackground
      source={require('../assets/Gatitos.png')}
      style = {{
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: "",
        alignItems: ""
      }}
    >
    <View style={{
      justifyContent: 'center', 
      alignItems: 'center',
      padding: 10
      }}>
      <Image 
          source={require('../assets/user.png')}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <Text>Mi cuenta</Text>
    </View>
      <View style = {styles.opciones}>
          <ViewText
          navigation={navigation}
          href=""
          icon_name="heart"
          icon_size={24}
          text="Mis me gusta"
          />
          <ViewText
          navigation={navigation}
          href=""
          icon_name="calendar"
          icon_size={24}
          text="Mis eventos"
          />
          <ViewText
          navigation={navigation}
          href=""
          icon_name="flag"
          icon_size={24}
          text="Lo más buscado"
          />
      </View>
      <View style = {styles.btn}>
        <IconButton
        navigation={navigation}
        href="Login"
        icon_name="poweroff"
        icon_size={24}
        icon_color="black"
        text="Cerrar sesión"
        />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'white',
  },
  opciones: {
    flex: 1
  },
  btn: {
    padding: 20
  }
})
export default PostScreen;
