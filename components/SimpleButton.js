import * as React from 'react';
import { Text, View, TouchableHighlight, StyleSheet} from 'react-native';

export default function SimpleButton(props) {  
  return <TouchableHighlight
    activeOpacity={0.6}
    underlayColor={props.bgColor}
    onPress={() => props.onPress()}>
      <View style={[styles.container, {backgroundColor: props.bgColor}]}>
        <Text style={{color: props.color, fontFamily: props.font}}>{props.text}</Text>
      </View>
  </TouchableHighlight>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
  },
});