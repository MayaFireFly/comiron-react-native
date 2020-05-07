import * as React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text} from 'react-native';

import Colors from '../constants/Colors';
import Contractor from '../components/Contractor';
import SubscribeContact from '../components/SubscribeContact';
import SimpleButton from '../components/SimpleButton';
import Message from '../components/Message';
import Camera from '../components/Camera';
import SubscribeModal from '../components/SubscribeModal';

const PHONE = '+7 (351) 225-42-42';
const EMAIL = 'comiron.price@gmail.com';

export default function ContractorScreen({route}) {
  const contractor = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modal, setModal] = React.useState(null);

  const subscribeBtn = (func, bgColor) => (<View style={styles.buttonWrapper}>
    <SimpleButton
      text='ПОДПИСАТЬСЯ'
      bgColor={bgColor}
      color={Colors.greenColor}
      font='sfui-text'
      onPress={() => func()}
    />
  </View>);
  
  const unSubscribeBtn = (func, bgColor) => (<SimpleButton
    text='ОТПИСАТЬСЯ'
    bgColor={bgColor}
    color={Colors.darkColor}
    font='sfui-text'
    onPress={() => func()}
  />);

  const subscribe = () => {
    console.log('subscribe function');
  };

  const unSubscribe = () => {
    console.log('unSubscribe function');
  };

  const showModal = () => {
    console.log('showModal function');
    setModalVisible(true);
    setModal(<SubscribeModal
      button={contractor.subscribe ? unSubscribeBtn(unSubscribe, Colors.whiteColor) : subscribeBtn(subscribe, Colors.whiteColor)}
      bgColor={Colors.whiteColor}
      visible={modalVisible}
      setVisible={setModalVisible}
      color={Colors.tintColor}
    />);
  };

  return <View style={styles.container}> 
    
    <View style={styles.two}>
      <Camera
        bgTopColor={Colors.tintColor}
        bgBottomColor={Colors.lightColor}
        bgColor={Colors.whiteColor}
        color={Colors.lightColor}
      />
    </View>   

    <View style={[styles.one, styles.bgLight]}>
      <SubscribeContact
        text={PHONE}
        email={EMAIL}
        textColor={Colors.darkColor}
        emailColor={Colors.tintColor}
      />
    </View>

    <View style={[styles.one, styles.bgLight, styles.buttonsWrapper]}>
      {contractor.subscribe ? unSubscribeBtn(showModal, Colors.lightColor) : subscribeBtn(showModal, Colors.lightColor)}
    </View>
    
    <View style={styles.pricesContainer}>
      {contractor.subscribe ? (      
        <ScrollView>
          <FlatList
            data={contractor.elems}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Contractor
              name={contractor.title}
              title={item.title}
              date={item.date}
              bgColor={Colors.lightColor}
              color={Colors.whiteColor}
              tintColor={Colors.tintColor}
              onPress={() => alert(item.title + ' selected!')}
            />}
          />
        </ScrollView>    
      ) : (
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <View style={styles.text}>
            <Text>Тут будет находиться описание о поставщике в большом или не очень количестве.</Text>
          </View>
          
          <View style={styles.messageWrapper}>
            <Message
              text='Прайсов, адресованных вам, пока нет.'
              color={Colors.tintColor}
              name='md-paper'
              bgColor={Colors.whiteColor}
              font='sfui-text'
              shadowColor={Colors.grayColor}
            />
          </View>

          <View style={styles.text}>
            <Text style={styles.ligthText}>Обратитесь к вашему менеджеру, чтобы включить вас в рассылку в приложении.</Text>
          </View>
        </View>
      )}
    </View> 

    {modalVisible && <View style={styles.modal}>{modal}</View>}    

  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightColor,
  },
  one: {
    flex: 1,
  },
  two:{
    flex: 2,
  },
  pricesContainer: {
    flex: 3,
  },
  bgLight: {
    backgroundColor: Colors.lightColor,
  },
  buttonsWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    minWidth: '60%',
    padding: '10px',
    borderWidth: '1px',
    borderColor: Colors.greenColor,
    borderStyle: 'solid',
  },
  text: {
    flex: 1,
    padding: '10px',
    justifyContent: 'center',
  },
  ligthText: {
    color: Colors.grayColor,
  },
  messageWrapper: {
    flex: 1,
    padding: '10px',
  },
  modal: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
});