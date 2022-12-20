import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons';



const ViewText = ({navigation, href, 
                  icon_name="asterisk", 
                  icon_next="ellipsis-h", 
                  icon_size=30, icon_size_next=15, 
                  icon_color="#6B0068", text="Opción de post"}) => {
  return (
    <TouchableOpacity style = {styles.post}
        onPress = { () => {
          navigation.navigate(href)
        } }
      >
        <View style = {styles.contenedor1}>
            <FontAwesome name={icon_name} size={icon_size} color={icon_color} />
        </View>
        <View style = {styles.contenedor2}>
            <Text>{text}</Text>
        </View> 
        <View style = {styles.contenedor1}>
            <FontAwesome name={icon_next} size={icon_size_next} color={icon_color} />
        </View>
    </TouchableOpacity>
  );
}
export default ViewText;
const styles = StyleSheet.create({
  post: {
    flex: .1,
    flexDirection: 'row',
    justifyContent: "center",
    padding: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#FFC2FD',
    borderColor: 'blue',
  },
  contenedor1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .3,
  },
  contenedor2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: .7,
    color: 'blue'
  },
});