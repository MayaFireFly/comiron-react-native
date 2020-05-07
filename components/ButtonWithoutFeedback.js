import * as React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ButtonWithoutFeedback(props) {  
  return <TouchableWithoutFeedback
    activeOpacity={0.6}
    underlayColor={props.color}
    onPress={() => props.onPress()}
    style={styles.wrapper}>
      <View style={[styles.container, {backgroundColor: props.bgColor}]}>
        <View style={styles.textWrapper}>          
          <Ionicons
            name={props.icon}
            size={16}
            style={{ marginBottom: -3 }}
            color={props.color}
          />
          <Text style={{color: props.color, fontFamily: props.font}}>{' ' + props.text}</Text>
        </View>
      </View>
  </TouchableWithoutFeedback>;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',  
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});