import * as React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import SimpleButton from '../components/SimpleButton';

import {AuthContext} from '../AuthContext';

export default function AuthScreen({navigation}) {
  const { signIn } = React.useContext(AuthContext);

  return <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.text}>Price</Text>
    </View>

    <View style={styles.inputsContainer}>
      <TextInput style={styles.inputs} placeholder='Email адрес' placeholderTextColor={Colors.lightColor}/>
      <TextInput style={styles.inputs} placeholder='Пароль' placeholderTextColor={Colors.lightColor}/>
    </View>

    <View style={styles.arrowContainer}>
      <View style={styles.arrowWrapper}>
        <Text onPress={() => signIn()}>
          <Ionicons
            name='md-arrow-forward'
            size={30}
            color={Colors.darkColor}       
          />
        </Text>        
      </View>      
    </View>

    <View style={styles.buttonContainer}>
      <SimpleButton 
        onPress={() => {navigation.push('Registry')}} 
        text='Зарегистрироваться'
        bgColor={Colors.darkColor}
        color={Colors.lightColor}
        font='sfui-text'/>      
    </View>
    
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkColor,
  },
  headerContainer: {
    flex: 3,
    paddingLeft: '18px',
  },
  text: {
    fontFamily: 'sfui-text',
    color: Colors.lightColor,
    fontSize: '20px',
  },
  inputsContainer: {
    flex: 3,
    paddingLeft: '18px', 
    paddingRight: '18px',    
  },
  inputs: {
    fontFamily: 'sfui-text',
    flex: 1,
    borderColor: Colors.darkColor,
    borderBottomColor: Colors.lightColor,
    borderWidth: '1px',
    color: Colors.lightColor,
    height: '100%',
  },
  arrowContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowWrapper: {
    width: '50px',
    height: '50px',
    border: '1px solid',
    borderColor: Colors.tintColor, 
    borderRadius: '25px',
    backgroundColor: Colors.tintColor,
    textAlign: 'center',
    justifyContent: 'center',   
  },
  buttonContainer: {
    flex: 1,
  },
  btn: {
    flex: 1,
    backgroundColor: Colors.darkColor,
    borderColor: Colors.darkColor,
    color: Colors.lightColor,
  },
});