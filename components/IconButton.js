import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const IconButton = ({navigation, 
                    href, 
                    icon_name="meho", 
                    icon_size=30, 
                    icon_color="#6B0068", 
                    text="por defecto"}) => {
  return (
      <TouchableOpacity style = {styles.btn}
        onPress = { () => {
          navigation.navigate(href)
        } }
      >
        <AntDesign name={icon_name} size={icon_size} color={icon_color} />
        <Text style = {styles.texto}>{text}</Text>
      </TouchableOpacity>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  texto: {
    color: "#6B0068",
  },
  btn: {
    backgroundColor: "#B679B4",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 1,
    borderRadius: 20
  }
});