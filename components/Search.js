import * as React from 'react';
import { StyleSheet, View, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Search(props) {
  return <View style={styles.container}>
    <Ionicons
      name='md-search'
      size={16}
      style={[styles.icon, {backgroundColor: props.bgColor }]}
      color={props.color}
    />
    <TextInput
      inlineImagePadding={1}
      placeholder={props.text}
      placeholderTextColor={props.color}
      onChangeText={(text) => props.onChangeText(text)}
      style={[styles.text, {backgroundColor: props.bgColor, fontFamily: props.font}]}/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',   
  },
  icon: {
    padding: '10px',
    height: '50px',
    paddingTop: '16px',   
  },
  text: {
    flex: 1,
    paddingTop: '10px',
    paddingRight: '10px',
    paddingBottom: '10px',
    paddingLeft: '0',
    fontSize: '16px',
    height: '50px', 
  },
});