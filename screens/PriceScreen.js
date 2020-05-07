import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';

import Colors from '../constants/Colors';
import Message from '../components/Message';
import Contractor from '../components/Contractor';

const prcs = [
  {id: 0, title: 'ГАЛЕОН ТРЕЙД', elems: [ 
    {id: 0, title: 'Стеклокерамика', date: '01.01.2020', items: [
      {cod: '000', title: 'Чайная пара', price: 100, store: 20, orderBefore: 0, image: 'https://images.unsplash.com/photo-1542691572-c7662acf3a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'},
      {cod: '002', title: 'Сервиз', price: 200, store: 3, orderBefore: 5, image: 'https://images.unsplash.com/photo-1498491751984-14acb85d7d90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
      {cod: '0A5', title: 'Бокалы', price: 300.5, store: 10000, orderBefore: 11, image: 'https://images.unsplash.com/photo-1532431993925-00ed69b363bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
      {cod: '3F1', title: 'Набор тарелок', price: 50.4, store: 100, orderBefore: 2, image: 'https://images.unsplash.com/photo-1484632152040-840235adc262?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80'},
      {cod: '003', title: 'Чайный набор', price: 1000000, store: 1, orderBefore: 0, image: 'https://images.unsplash.com/photo-1531819107804-b7cf36de8a19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
      {cod: '004', title: 'Миска', price: 27.12, store: 200, orderBefore: 120, image: 'https://images.unsplash.com/photo-1548084769-1b94d5c3168e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    ]},
    {id: 1, title: 'Керамика', date: '02.02.2020', items: []},
    {id: 2, title: 'Кварц', date: '03.03.2020', items: []},
    {id: 3, title: 'Металлокерамика', date: '04.04.2020', items: []},
    {id: 5, title: 'Стекло', date: '05.05.2020', items: []},
    {id: 6, title: 'Металл', date: '06.06.2020', items: []},
  ], subscribe: true},
  {id: 1, title: 'ТЕАТР СВЕТА', elems: [], subscribe: false},
  {id: 2, title: 'BE WIFE БИЖУТЕРИЯ', elems: [], subscribe: false},
  {id: 3, title: 'ПОДАРКИ И ЕНТЕРЬЕР', elems: [], subscribe: true},
  {id: 4, title: 'СПОРТ И ОТДЫХ', elems: [
    {id: 0, title: 'Мяч', date: '01.01.2020', items: []},
    {id: 1, title: 'Обруч', date: '02.02.2020', items: []},
    {id: 2, title: 'Скакалка', date: '03.03.2020', items: []},
  ], subscribe: false}
];

export default function PriceScreen({navigation}) {
  const [prices, setPrices] = React.useState(prcs);

  return prices.length <= 0 ? (
    <View style={styles.container}>    
      <View style={styles.messageWrapper}>
        <Message
          bgColor={Colors.whiteColor}
          shadowColor={Colors.grayColor}
          name='md-paper'
          color={Colors.tintColor}
          text='Прайсов, адресованных вам, пока нет.'
          font='sfui-text'
        />
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.text}>Обратитесь к вашему менеджеру, чтобы включить вас в рассылку в приложении.</Text>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <ScrollView style={{width:'100%', padding: '5px'}}>
          <FlatList
            data={prices[0].elems}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Contractor
              name={prices[0].title}
              title={item.title}
              date={item.date}
              bgColor={Colors.lightColor}
              color={Colors.whiteColor}
              tintColor={Colors.tintColor}
              onPress={() => navigation.push('PriceDetail', Object.assign({}, item, {contractor:prices[0].title}))}
            />}
          />
        </ScrollView>   
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightColor,
    alignItems:'center',
    justifyContent:'center',
  },
  messageWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textWrapper: {
    flex: 1,
    paddingTop: '10px',
  },
  text: {
    color: Colors.grayColor,
  },
});