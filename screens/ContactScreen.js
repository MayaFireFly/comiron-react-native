import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';
import Camera from '../components/Camera';
import SubscribeContact from '../components/SubscribeContact';

const MESSAGE = 'Стать поставщиком, рассылать прайсы через приложение, задать вопрос о работе приложения:';
const EMAIL = 'comiron.price@gmail.com';

export default function ContactScreen() {
  return <View style={styles.container}>

    <View style={styles.cameraWrapper}>
      <Camera
        bgTopColor={Colors.tintColor}
        bgBottomColor={Colors.lightColor}
        bgColor={Colors.whiteColor}
        color={Colors.lightColor}        
      />
    </View>  
    
    <View style={styles.messageWrapper}>
      <SubscribeContact
        text={MESSAGE}
        email={EMAIL}
        textColor={Colors.darkColor}
        emailColor={Colors.tintColor}
        isBigMail={true}
      />
    </View> 

    <View style={styles.last}></View>   
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  cameraWrapper: {
    flex: 2,
  },
  messageWrapper: {
    flex: 2,
    padding: '10px',
  },
  last: {
    flex: 3,
  },
});