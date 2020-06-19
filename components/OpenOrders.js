import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, ScrollView } from 'react-native';
import { OrdersView } from '../shared/tools';
import styles from '../assets/Styles';
import allOrders from '../data/orders';
import allShifts from '../data/shifts';


export default function OpenOrders({ navigation }) {
    const [selectedShift, setSelectedShift] = useState(allShifts[0])
    const selectedOrders = allOrders.filter(item => item.shift === selectedShift)

    return (
        <View>
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
                <OrdersView data={selectedOrders} navigation={navigation} />
            </View>

        </View>
    )
}