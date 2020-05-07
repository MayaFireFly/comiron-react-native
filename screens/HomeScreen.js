import * as React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native';

import Colors from '../constants/Colors';
import ButtonWithoutFeedback from '../components/ButtonWithoutFeedback';
import Search from '../components/Search';
import Contractor from '../components/Contractor';

const contractors = [
  {id: 0, title: 'ГАЛЕОН ТРЕЙД', elems: [ 
    {id: 0, title: 'Стеклокерамика', date: '01.01.2020'},
    {id: 1, title: 'Керамика', date: '02.02.2020'},
    {id: 2, title: 'Кварц', date: '03.03.2020'},
    {id: 3, title: 'Металлокерамика', date: '04.04.2020'},
    {id: 5, title: 'Стекло', date: '05.05.2020'},
    {id: 6, title: 'Металл', date: '06.06.2020'},
  ], subscribe: true},
  {id: 1, title: 'ТЕАТР СВЕТА', elems: [], subscribe: false},
  {id: 2, title: 'BE WIFE БИЖУТЕРИЯ', elems: [], subscribe: false},
  {id: 3, title: 'ПОДАРКИ И ЕНТЕРЬЕР', elems: [], subscribe: true},
  {id: 4, title: 'СПОРТ И ОТДЫХ', elems: [
    {id: 0, title: 'Мяч', date: '01.01.2020'},
    {id: 1, title: 'Обруч', date: '02.02.2020'},
    {id: 2, title: 'Скакалка', date: '03.03.2020'},
  ], subscribe: false}
];

export default function HomeScreen({navigation}) {
  const [isSearch, setIsSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <View style={styles.container}>
      
      <View style={styles.buttonsWrapper}>
        <View style={styles.buttonsContainer}>
          <ButtonWithoutFeedback
            onPress={() => setIsSearch(false)}
            text='Мои поставщики'
            icon=''
            bgColor={isSearch ? Colors.whiteColor : Colors.tintColor}
            color={isSearch ? Colors.lightColor : Colors.whiteColor}
            font='sfui-text'/>
          <ButtonWithoutFeedback
            onPress={() => setIsSearch(true)}
            text='Поиск'
            icon='md-search'
            bgColor={isSearch ? Colors.tintColor : Colors.whiteColor}
            color={isSearch ? Colors.whiteColor : Colors.lightColor}
            font='sfui-text'/>
        </View>
      </View>       

        {isSearch ? (
        <View style={styles.buttonsWrapper}>
          <View style={styles.buttonsContainer}>
            <Search 
              text='Поиск по поставщикам'
              onChangeText={setSearchValue}
              bgColor={Colors.whiteColor}
              color={Colors.lightColor}
              font='sfui-text'/>
          </View> 
        </View>
        ) : (
          <Text></Text>
        )}          

      <View style={styles.contractorsContainer}>
        <ScrollView>
          <FlatList
            data={contractors}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Contractor
              title={item.title}
              bgColor={Colors.lightColor}
              color={Colors.whiteColor}
              onPress={() => navigation.push('Contractor', item)}
            />}
          />
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightColor,
  },
  buttonsWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    maxHeight: '65px',
    minHeight: '57px',
    backgroundColor: Colors.lightColor,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    maxHeight: '58px',
    minHeight: '50px',
    marginBottom: '7px',
  },
  contractorsContainer: {
    flex: 5,
  },
});
