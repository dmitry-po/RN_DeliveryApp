import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, Linking, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { OrdersView, FAB, AppWidth, OrderDetails } from '../shared/tools';

export default function Home({ navigation }) {
    const [orders, setOrders] = useState([
        { key: '1', address: 'Пугачева, 147', weight: '11.1кг', active: false },
        { key: '2', address: 'Посадского, 215', weight: '22.2кг', active: true },
        { key: '3', address: 'Летниковская, 10 стр. 5', weight: '33.3кг', active: true },
        { key: '4', address: 'Пресненская наб. 12', weight: '44.4кг', active: true },
        { key: '5', address: 'Ленина, 17', weight: '55.5кг', active: true },
        { key: '6', address: 'Жерара Депардье, 81', weight: '66.6кг', active: true },
        { key: '7', address: 'Адамса, 42', weight: '77.7кг', active: true },
        { key: '8', address: 'Вечнозеленая Аллея, 742', weight: '88.8кг', active: true },
        { key: '12', address: 'Посадского, 215', weight: '22.2кг', active: true },
        { key: '13', address: 'Летниковская, 10 стр. 5', weight: '33.3кг', active: true },
        { key: '14', address: 'Пресненская наб. 12', weight: '44.4кг', active: true },
        { key: '15', address: 'Ленина, 17', weight: '55.5кг', active: true },
        { key: '16', address: 'Жерара Депардье, 81', weight: '66.6кг', active: true },
        { key: '17', address: 'Адамса, 42', weight: '77.7кг', active: true },
        { key: '18', address: 'Вечнозеленая Аллея, 742', weight: '88.8кг', active: true }])

    const [popupVisibiility, setpopupVisibiility] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState({})
    function openOrderDetails(item) {
        setSelectedOrder(item);
        setpopupVisibiility(true);
    }
    function cancelOrder(item) {
        setpopupVisibiility(false);
        alert('Заказ ' + item.key + ' будет отменен');

    }
    function closeOrder(item) {
        console.log('Заказ выполнен');
        setpopupVisibiility(false);
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
            <View style={styles.mainview}>
                <View style={{ margin: 5, flex: 1 }}>
                    < OrdersView data={orders} onPress={openOrderDetails} />
                </View>
                { /* <Button title='Построить маршрут' onPress={() => (Linking.openURL(getRoute()))} /> */}
                <FAB navigation={navigation} elementColor='#F25D27' />
            </View>
            {popupVisibiility && <OrderDetails item={selectedOrder} buttons={buttons} visible={setpopupVisibiility} navigation={navigation} />}
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