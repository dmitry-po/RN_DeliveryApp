import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, ScrollView } from 'react-native';
import { OrdersView, OrderDetails } from '../shared/tools';
import styles from '../assets/Styles';
import allOrders from '../data/orders';
import allShifts from '../data/shifts';


export default function OpenOrders({ navigation }) {
    const [selectedShift, setSelectedShift] = useState(allShifts[0])
    const selectedOrders = allOrders.filter(item => item.shift === selectedShift)
    const [popupVisibiility, setpopupVisibiility] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState({})
    function openOrderDetails(item) {
        setSelectedOrder(item);
        setpopupVisibiility(true);
    }
    function cancelOrder() {       
    }
    function closeOrder() {
        navigation.navigate('Home');
        setpopupVisibiility(false);
    }

    const buttons = [
        { title: '', onPress: cancelOrder },
        { title: 'ВЗЯТЬ', onPress: closeOrder }
    ]

    return (
        <>
            <View style={{
                borderRadius: 5,
                margin: 10,
                marginBottom: 0,
                padding: 5,
                backgroundColor: 'white',
                elevation: 1
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    padding: 5,
                }}>Доступные смены:</Text>
                <Picker
                    selectedValue={selectedShift}
                    onValueChange={(itemValue, itemIndex) => setSelectedShift(itemValue)}>
                    {allShifts.map(item => (
                        <Picker.Item key={item} label={item} value={item} />
                    ))}
                </Picker>
            </View>
            <View style={{margin:5}}>
                <OrdersView data={selectedOrders} onPress={openOrderDetails} />
            </View>
            {popupVisibiility && <OrderDetails item={selectedOrder} buttons={buttons} visible={setpopupVisibiility} navigation={navigation} />}            
        </>
    )
}