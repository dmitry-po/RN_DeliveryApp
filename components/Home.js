import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, Button, Linking } from 'react-native';
import { OrdersView, FAB, AppWidth, OrderDetails } from '../shared/tools';
import { getActiveOrders, setOrderStatus } from '../data/orders';

export default function Home({ navigation }) {
    //const [selectedOrders, setSelectedOrders] = useState(getActiveOrders())
    var selectedOrders = getActiveOrders()
    const [selectedOrder, setSelectedOrder] = useState({})
    const [popupVisibiility, setpopupVisibility] = useState(false)

    // for refresing screen from child -->
    const [rerender, setRerender] = useState(0)
    // <--

    function openOrderDetails(item) {
        setSelectedOrder(item);
        setpopupVisibility(true);
    }
    function cancelOrder(order) {
        setpopupVisibility(false);
        alert('Заказ ' + order.key + ' будет отменен')
        setOrderStatus(order.key, false)
        selectedOrders = getActiveOrders()
    }
    function closeOrder(item) {
        setpopupVisibility(false);
    }

    const buttons = [
        { title: 'ОТКЛОНИТЬ', onPress: cancelOrder },
        { title: 'ЗАВЕРШИТЬ', onPress: closeOrder }
    ]

    function getRoute() {
        var addresses = []
        selectedOrders.forEach((item) => addresses.push(item.address))
        const uri = 'https://www.google.ru/maps/dir/'
        return (uri + '/' + addresses.join('/') + '/')
    }

    const fabOnPress = () => {
        navigation.navigate('OpenOrders')
    }

    return (
        <>
            <View style={styles.mainview} on>
                <View style={{ margin: 5, flex: 1 }}>
                    {selectedOrders.length > 0 &&
                        < OrdersView
                            data={selectedOrders}
                            onPress={openOrderDetails}
                            renderer={setRerender}
                            enableMultiselect={false} />}
                    {selectedOrders.length === 0 &&
                        < Text style={{ alignSelf: 'center' }}> Нет активных заказов.</Text>}
                </View>
                <Image source={require('../img/Logo.png')} style={{
                    width: 73, height: 53.125, resizeMode: 'stretch',
                    position: 'absolute', bottom: 8, left: 8
                }} />
                <FAB onPress={fabOnPress} elementColor='#F25D27' />
            </View>
            {selectedOrders.length > 0 && <Button title='Построить маршрут' onPress={() => (Linking.openURL(getRoute()))} />}

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