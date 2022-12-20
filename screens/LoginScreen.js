import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import HomeScreen from './HomeScreen';

const LoginSreen = ( {navigation} ) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.texto}>Iniciar Sesión</Text>
      <TextInput
        style = {styles.textbox}
        placeholder = "Correo electronico"
      />
      <TextInput
        style = {styles.textbox}
        placeholder = "Contraseña"
      />
      <TouchableOpacity
        style = {styles.button}
        onPress = { () => {
          navigation.navigate("Home")
        } }
      >
        <Text>
          Aceptar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginSreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFAECE',
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    color: "white",

  },
  textbox: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    marginVertical: 3,
    borderRadius: 30,
  },
  button: {
    marginVertical: 3,
    borderRadius: 30,
    backgroundColor: '#FFC300',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
