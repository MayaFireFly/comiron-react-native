import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Message(props) {
  return <View>
    <View style={[
        {backgroundColor: props.bgColor, borderColor: props.bgColor}, 
        props.shadowColor ? {shadowColor: props.shadowColor} : {}, 
        styles.container]}>
      <Ionicons
        name={props.name}
        size={30}
        style={styles.icon}
        color={props.color}
      />
      <Text style={[styles.text, {fontFamily: props.font}]}>{props.text}</Text>        
    </View>
    <View style={[
      styles.pointer, 
      {backgroundColor: props.bgColor}, 
      props.shadowColor ? {shadowColor: props.shadowColor} : {}
    ]}></View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '25px',
    boxShadow: '0 10px 10px -5px',
    shadowColor: '#dddddf',
    shadowOpacity: 0.8,
  },
  icon: {
    width: '50px',
    padding: '10px',
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: '18px',
  },
  pointer: {
    zIndex: 2,
    width: '10px',
    height: '10px',
    transform: [{rotate: '45deg'}],
    marginTop: '-5px',
    marginLeft: '30px',
    boxShadow: '5px 5px 5px 0',
    shadowColor: '#dddddf',
    shadowOpacity: 0.8,
  },
});