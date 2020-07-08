import React, { useState, useRef } from 'react';
import { View, Text, Picker, Image } from 'react-native';
import { OrdersView, OrderDetails, FAB } from '../shared/tools';
import { getAllOrders, setOrderStatus } from '../data/orders';
import allShifts from '../data/shifts';
import { or } from 'react-native-reanimated';


export default function OpenOrders({ navigation }) {
    const allOrders = useRef(JSON.parse(JSON.stringify(getAllOrders())))
    const [selectedShift, setSelectedShift] = useState(allShifts[0])
    const ordersByShift = allOrders.current.filter(item => item.shift == selectedShift && item.active == false)
    const [popupVisibiility, setpopupVisibiility] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState({})

    // for refresing screen from child -->
    const [rerender, setRerender] = useState(0)
    // <--

    function openOrderDetails(item) {
        setSelectedOrder(item);
        setpopupVisibiility(true);
    }
    function cancelOrder() {
    }
    function closeOrder(order) {
        setOrderStatus(order.key, true);
        navigation.navigate('Home', {});
    }

    const buttons = [
        { title: '', onPress: cancelOrder },
        { title: 'ВЗЯТЬ', onPress: closeOrder }
    ]

    const fabOnPress = () => {
        allOrders.current.filter((item) => item.selected).forEach((order) => {
            setOrderStatus(order.key, true);
        })
        navigation.navigate('Home', {});
    }

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
            <View style={{ margin: 5 }}>
                {ordersByShift.length > 0 &&
                    <OrdersView
                        data={ordersByShift}
                        onPress={openOrderDetails}
                        renderer={setRerender}
                        enableMultiselect={true} />}
                {ordersByShift.length == 0 &&
                    < Text style={{ alignSelf: 'center' }}> Нет доступных заказов.</Text>}
            </View>
            {popupVisibiility && <OrderDetails item={selectedOrder} buttons={buttons} visible={setpopupVisibiility} navigation={navigation} />}
            <Image source={require('../img/Logo.png')} style={{
                width: 73, height: 53.125, resizeMode: 'stretch',
                position: 'absolute', bottom: 8, left: 8
            }} />
            {allOrders.current.filter((item) => item.selected).length > 0 && <FAB onPress={fabOnPress} elementColor='#F25D27' />}
        </>
    )
}