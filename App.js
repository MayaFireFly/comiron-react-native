import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Colors from './constants/Colors';

import LoadingScreen from './screens/LoadingScreen';

import AuthScreen from './screens/AuthScreen';
import RegistryScreen from './screens/RegistryScreen';

import HomeScreen from './screens/HomeScreen';
import ContractorScreen from './screens/ContractorScreen';

import ContactScreen from './screens/ContactScreen';
import PriceScreen from './screens/PriceScreen';
import PriceDetailScreen from './screens/PriceDetailScreen';
import OrderScreen from './screens/OrderScreen';

import {AuthContext} from './AuthContext';

import TabBarIcon from './components/TabBarIcon'; 

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ContactStack = createStackNavigator();
const PriceStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const RootStack = createStackNavigator();

const AuthStackScreen = () => {
  return (<AuthStack.Navigator initialRouteName='Auth'>
    <AuthStack.Screen name='Auth' component={AuthScreen} options={{
      title:'COMIRON',
      headerStyle:{
        backgroundColor: Colors.tintColor,
        borderBottomColor: Colors.tintColor, 
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: 'deja-vu-sans',
        color: Colors.lightColor,
      },
      }}/>
    <AuthStack.Screen name='Registry' component={RegistryScreen} options={{
      title:'Регистрация',
      headerStyle: {
        backgroundColor: Colors.tintColor,
        borderBottomColor: Colors.tintColor, 
      },
      headerTitleStyle: {        
        fontFamily: 'deja-vu-sans',
        color: Colors.lightColor,
      },
      headerTitleAlign: 'center',
      }}/>
  </AuthStack.Navigator>
  );
}

const getHeaderOptionsIcon = (title, iconName) => {
  return {
    title: title,
    headerTitleAlign: 'center',
    headerTitleStyle: { 
      fontWeight: 'bold',       
      fontFamily: 'sfui-text',
    },
    tabBarIcon: ({ focused}) => 
      <TabBarIcon 
        focused={focused} 
        name={iconName}
        activeColor={Colors.tintColor}
        inactiveColor={Colors.lightColor}
      />,
  }
}

const getHeaderOptions = (title, bgColor = Colors.whiteColor, color = Colors.darkColor, borderColor = Colors.lightColor) => {
  return {
    title: title,
    headerTitleAlign: 'center',
    headerTitleStyle: { 
      fontWeight: 'bold',       
      fontFamily: 'sfui-text',
      color: color,
    },
    headerStyle: {
      backgroundColor: bgColor,
      borderBottomColor: borderColor, 
    },
  }
}

const TabsScreen = () => {
  return (<Tabs.Navigator initialRouteName='Home' tabBarOptions={{
    showLabel: false,
    showIcon: true,    
  }}>
    <Tabs.Screen name='Home' component={HomeStackScreen} options={getHeaderOptionsIcon('Поставщики', 'md-home')}/>
    <Tabs.Screen name='Price' component={PriceStackScreen} options={getHeaderOptionsIcon('Прайс-листы', 'md-document')}/>
    <Tabs.Screen name='Contact' component={ContactStackScreen} options={getHeaderOptionsIcon('Контакты', 'md-contact')}/>    
  </Tabs.Navigator>);
}

const HomeStackScreen = () => (
  <HomeStack.Navigator initialRouteName='Home'>
    <HomeStack.Screen name='Home' component={HomeScreen} options={getHeaderOptions('Поставщики')}/>
    <HomeStack.Screen name='Contractor' component={ContractorScreen} 
      options={({route}) => (getHeaderOptions(route.params.title, Colors.tintColor, Colors.whiteColor, Colors.tintColor))}/>
  </HomeStack.Navigator>
);

const ContactStackScreen = () => (
  <ContactStack.Navigator>
    <ContactStack.Screen name='Contact' component={ContactScreen} options={getHeaderOptions('Контакты', Colors.tintColor, Colors.whiteColor, Colors.tintColor)}/>
  </ContactStack.Navigator>
);

const PriceStackScreen = () => (
  <PriceStack.Navigator>
    <PriceStack.Screen name='Price' component={PriceScreen} options={getHeaderOptions('Прайс-листы')}/>
    <PriceStack.Screen name='PriceDetail' component={PriceDetailScreen} 
      options={({route}) => (getHeaderOptions(route.params.title))}/>
    <PriceStack.Screen name='Order' component={OrderScreen} options={getHeaderOptions('Оформление заказа')}/>
  </PriceStack.Navigator>
);

const RootStackScreen = ({isAuth}) => (
  <RootStack.Navigator headerMode='none'>
    {isAuth ? (
      <RootStack.Screen name='App' component={TabsScreen}/>
    ) : (
      <RootStack.Screen name='Auth' component={AuthStackScreen}/>
    )}   
  </RootStack.Navigator>
);

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);  
  const [isAuth, setIsAuth] = React.useState(false);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setLoadingComplete(true);
        setIsAuth(true);
      },
      signUp: () => {
        setLoadingComplete(true);
        setIsAuth(true);
      },
      signOut: () => {
        setLoadingComplete(true);
        setIsAuth(false);
      }
    }
  }, []);
 
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {       
        await Font.loadAsync({
          ...Ionicons.font,
          'deja-vu-sans': require('./assets/fonts/DejaVuSans.ttf'),
          'sfui-text': require('./assets/fonts/SFUIText.ttf'),
        });
      } catch (e) {        
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }
    
    setTimeout(() => { loadResourcesAndDataAsync() }, 1000);
  }, []);

  if (!isLoadingComplete) {
    return <LoadingScreen/>;
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <RootStackScreen isAuth={isAuth}/>
        </NavigationContainer>
      </AuthContext.Provider>      
    );
  } 
}