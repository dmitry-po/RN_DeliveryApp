import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { OrdersView, FAB, AppWidth, OrderDetails } from '../shared/tools';
import { getActiveOrders, setOrderStatus } from '../data/orders';

export default function Home({ navigation }) {
    //const [selectedOrders, setSelectedOrders] = useState(getActiveOrders())
    var selectedOrders = getActiveOrders()
    const [selectedOrder, setSelectedOrder] = useState({})
    const [popupVisibiility, setpopupVisibility] = useState(false)

    console.log(navigation)

    function openOrderDetails(item) {
        setSelectedOrder(item);
        setpopupVisibility(true);
    }
    function cancelOrder(order) {
        console.log(order)
        setpopupVisibility(false);
        alert('Заказ ' + order.key + ' будет отменен')
        setOrderStatus(order, false)
        selectedOrders = getActiveOrders()
    }
    function closeOrder(item) {
        console.log('Заказ выполнен');
        setpopupVisibility(false);
    }


    const buttons = [
        { title: 'ОТКЛОНИТЬ', onPress: cancelOrder },
        { title: 'ЗАВЕРШИТЬ', onPress: closeOrder }
    ]

    function getRoute() {
        const uri = 'https://www.google.ru/maps/dir/'
        const addr1 = 'Псков, ул. Ленина, 17'
        const addr2 = 'Псков, ул. Текстильная, 11'
        const addr3 = 'Псков, ул. Набат, 2'
        return (uri + '/' + addr1 + '/' + addr2 + '/' + addr3 + '/')
    }

    return (
        <>
            {console.log('enter')}
            <View style={styles.mainview} on>
                <View style={{ margin: 5, flex: 1 }}>
                    {(selectedOrders.length > 0) && < OrdersView data={selectedOrders} onPress={openOrderDetails} />}
                    {(selectedOrders.length == 0) && (< Text style={{ alignSelf: 'center' }}> Нет активных заказов.</Text>)}
                </View>
                { /* <Button title='Построить маршрут' onPress={() => (Linking.openURL(getRoute()))} /> */}
                <FAB navigation={navigation} elementColor='#F25D27' />
            </View>
            {popupVisibiility && <OrderDetails item={selectedOrder} buttons={buttons} visible={setpopupVisibility} navigation={navigation} />}
        </>
    );
}

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        width: AppWidth,
        alignSelf: 'center'
    },
    windowview: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        borderRadius: 5,
        opacity: 0.95,
        margin: 5,
        padding: 5,

    },
    header: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    textInput: {
        paddingTop: 5,
        borderBottomColor: '#025159',
        borderBottomWidth: 1
    },
    text: {
        paddingTop: 10
    }
})