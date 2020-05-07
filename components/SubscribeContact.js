import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function SubscribeContact(props) {
  return <View style={styles.container}>
    <Text style={[{color: props.textColor}, styles.text]}>{props.text}</Text>
    <Text style={[{color: props.emailColor}, styles.text, props.isBigMail ? { fontSize: '1.5em' } : {fontSize: '14px'}]}>{props.email}</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'sfui-text',
    textAlign: 'center',
  },
});