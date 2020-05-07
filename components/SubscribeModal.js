import React from 'react';
import { StyleSheet, View, Text, TextInput, Modal, TouchableWithoutFeedback} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SubscribeModal(props) {
  const [comment, setComment] = React.useState('');

  return <Modal  
    style={styles.container}
    animationType='slide'
    transparent={false}
    visible={props.visible}
    onRequestClose={() => console.log('Modal was closed with comment ' + comment)}
    presentationStyle='fullScreen'
    >
    <View style={[styles.modal, {backgroundColor: props.bgColor}]}>

      <TouchableWithoutFeedback 
        style={styles.iconWrapper}
        onPress={() => props.setVisible(false)}>
        <View style={[styles.iconContainer, {backgroundColor: props.bgColor, borderColor: props.bgColor}]}>
          <Ionicons
            name='md-close-circle'
            size={20}
            style={[{backgroundColor: props.bgColor, borderColor: props.color}, styles.icon]}
            color={props.color}
          />
        </View>        
      </TouchableWithoutFeedback> 

      <Text style={[{fontWeight:'bold'}, styles.title]}>Отправить запрос</Text>
      <Text style={styles.subTitle}>на подписку (отписку)</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder='Комментарий:'
          onChangeText={({text}) => setComment(text)}
          style={styles.input}
          numberOfLines={3}
        />
      </View>
      
      <View style={styles.button}>{props.button}</View>
    </View>    
  </Modal>;
}

const styles = StyleSheet.create({
  container: {
    zIndex: 3,
    position: 'relative',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(158,160,174,0.4)',
    borderColor: 'rgba(158,160,174,0.4)',
  },
  modal: {
    zIndex: 4,
    position: 'relative',
    top: '50%',
    left: '0',
    width: '100%',
    height: '50%',
    padding: '10px',
  },
  iconWrapper: {
    flex: 2,
    flexDirection: 'row',
  },
  iconContainer:{
    width: '40px',
    height: '40px',
    padding: '10px 10px 10px 10px',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 5px -5px',
    shadowColor: '#dddddf',
    zIndex: 5,
    position: 'absolute',
    top: '-7%',
    left: '80%',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '20px',
  },
  icon: {  
  },
  title: {
    flex: 1,
  },
  subTitle: {
    flex: 1,
  },
  inputWrapper: {
    flex: 5,
  },
  input: {
    height: '3em',    
  },
  button: {
    flex: 2,
    paddingTop: '10px',
    paddingLeft: '20%',
    paddingRight: '20%',
  },
});