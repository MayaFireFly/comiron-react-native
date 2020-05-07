import * as React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';

import Colors from '../constants/Colors';
import Contractor from '../components/Contractor';
import PriceItem from '../components/PriceItem';

export default function PriceDetailScreen({route}) {
  const price = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);

  return <View style={styles.container}>

    <View style={styles.priceHeaderWrapper}>
      <Contractor
        name={price.contractor}
        title={price.title}
        date={price.date}
        bgColor={Colors.lightColor}
        color={Colors.whiteColor}
        tintColor={Colors.tintColor}
        onPress={() => console.log('PriceDetail price pressed')}
      />
    </View> 

    <View style={styles.priceDescription}>
      <Text>Описание прайса</Text>
    </View>

    <View style={styles.priceItemsWrapper}>
      <ScrollView>
        <FlatList
          data={price.items}
          keyExtractor={item => item.cod}
          renderItem={({item}) => 
            <PriceItem
              bgColor={Colors.whiteColor}
              src={item.image}
              title={item.title}
              price={item.price}
              orderBefore={item.orderBefore}
              iconBgColor={Colors.greenColor}
              color={Colors.whiteColor}
              onPress={() => setModalVisible(true)}
              cod={item.cod}
              store={item.store}
            />
          }
        />
      </ScrollView>
    </View>

  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightColor,
    alignItems:'center',
    justifyContent:'center',
  },
  priceHeaderWrapper: {
    flex: 1,
    width: '100%',
  },
  priceDescription:{
    flex: 1,
    width: '100%',
    padding: '10px',
  },
  priceItemsWrapper: {
    flex: 5,
    width: '100%',
  },
});