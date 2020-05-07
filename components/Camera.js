import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Camera(props) {
  return <View style={styles.container}>
    <View style={[{backgroundColor: props.bgTopColor}, styles.topContainer]}></View>
    <View style={[{backgroundColor: props.bgBottomColor}, styles.bottomContainer]}></View>
   
    <View style={[styles.iconWrapper, {backgroundColor: props.bgColor, borderColor: props.bgColor}]}>
      <Ionicons
        name='md-camera'
        size={30}
        style={[{backgroundColor: props.bgColor, borderColor: props.bgColor}, styles.icon]}
        color={props.color}
      />
    </View>
    
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '50%',
  },
  bottomContainer: {
    position: 'absolute',
    top: '50px',
    left: '0',
    width: '100%',
    height: '50%',
  },
  iconWrapper: {
    width: '40%',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '40%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    left: '30%',
  },
  icon: {
    width: '30px',
  },
});