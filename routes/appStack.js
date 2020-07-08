import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../components/Login';
import Home from '../components/Home';
import OrderDetails from '../components/OrderDetails';
import OpenOrders from '../components/OpenOrders';
import Header from '../shared/header';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            header: () => null,
            gestureEnabled: false
        }
    },
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Активные заказы' />,
                headerLeft: () => null,
                gestureEnabled: false
            }
        }
    },
    OpenOrders: {
        screen: OpenOrders,
        navigationOptions: {
            title: "Доступные заказы",

        }
    },
    OrderDetails: {
        screen: OrderDetails,
        navigationOptions: {
            title: "Информация о заказе",
            gestureEnabled: true,
            gestureDirection: 'horizontal'
        },
        screenOptions: {

        }
    },
    
};

const AppStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#025159',
        },
        headerTintColor: '#eee',
        gestureEnabled: true,
        gestureDirection: 'horizontal'
    }
});

export default AppStack;