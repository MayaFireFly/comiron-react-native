import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';

export default function OrderScreen() {
  return <View style={styles.container}>    
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightColor,
    alignItems:'center',
    justifyContent:'center',
  },
});