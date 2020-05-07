import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import Colors from '../constants/Colors';

export default function LoadingScreen() {
  return <View style={styles.container}>

    <View style={styles.header}>      
      <Text style={styles.text}>COMIRON</Text>      
    </View>

    <View style={[styles.header, {backgroundColor: Colors.darkColor, flex: 2}]}>      
      <Text style={[styles.text, {color: Colors.tintColor}]}>.COM</Text>      
    </View>

    <View style={styles.footer}>
      <ActivityIndicator size='large' color={Colors.lightColor}/>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkColor,
    justifyContent: 'space-between',    
  },
  header: { 
    flex: 4,
    flexDirection: 'row', 
    padding: '0 0 0 24px',
    backgroundColor: Colors.tintColor,
    alignItems: 'center',     
  },
  text: {    
    transform: [{ rotate: '90deg'}],
    color: Colors.lightColor,
    fontSize: 24,
    fontFamily: 'deja-vu-sans',
    display: 'flex',
    height: '30px',
    width: '90px',
    textAlign: 'center',
  }, 
  footer: {
    flex: 6,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: '24px',    
  },
});