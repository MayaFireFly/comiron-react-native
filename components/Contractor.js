import * as React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Contractor(props) {
  return <View style={[styles.container, {backgroundColor: props.color}]}>
    {props.src ? (
      <Image
        source={props.src}
        style={[styles.image, {borderColor: props.bgColor, backgroundColor: props.bgColor}]}
      />
    ) : (
      <Ionicons
        name='md-camera'
        size={20}
        style={[styles.icon, {backgroundColor: props.bgColor, borderColor: props.bgColor}]}
        color={props.color}
      />
    )}
    
    <View style={styles.textWrapper}>
      {props.name && <Text style={[styles.title, styles.smallText, {color: props.tintColor}]}>{props.name}</Text>}

      <Text style={[styles.title, props.name && props.date && {fontWeight: 'bold'}]} onPress={() => props.onPress()}>{props.title}</Text>

      {props.date && <Text style={[styles.title, styles.smallText]}>{props.date}</Text>}
    </View>
    

  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: '10px', 
    margin: '5px',     
  },
  image: {
    fpadding: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '15px',
  },
  icon: {
    padding: '10px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '15px',
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    paddingLeft: '20px',
  },
  smallText: {
    fontSize: '10px',
  },
});