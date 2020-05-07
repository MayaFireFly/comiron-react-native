import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PriceItem(props) {
  return <View style={styles.container}>

    <View style={[styles.row, styles.two, {backgroundColor: props.bgColor}]}>
      <View style={styles.imageWrapper}>
        <Image source={props.src}/>
      </View>
      <View style={styles.dataWrapper}>
        <Text>{props.title}</Text>
        <Text>{props.price}</Text>
        <Text>{props.orderBefore}</Text>
      </View>
      <View style={styles.iconWrapper}>
        <TouchableWithoutFeedback onPress={() => props.onPress()} style={styles.iconContainer}>
          <Ionicons
            name='md-cart'
            size={20}
            style={[styles.icon, {backgroundColor: props.iconBgColor, borderColor: props.iconBgColor}]}
            color={props.color}
          />
        </TouchableWithoutFeedback>        
      </View>
    </View>

    <View style={[styles.row, styles.one, {backgroundColor: props.bgColor}]}>
      <View style={styles.codWrapper}>
        <Text>{props.cod}</Text>
      </View>
      <View style={styles.storeWrapper}>
        <Text>{props.store}</Text>
      </View>
    </View>

  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10px',
  },
  one: {
    flex: 1,
  },
  two: {
    flex: 2,
  },
  row: {
    flexDirection: 'row',
  },
  imageWrapper: {
    flex: 1,
  },
  dataWrapper: {
    flex: 3,
  },
  iconWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    width: '40px',
    height: '40px',
  },
  icon: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '5px',
  },
  codWrapper: {
    flex: 1,
  },
  storeWrapper: {
    flex: 1,
  },  
});