import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { OrdersView, FAB, AppWidth } from '../shared/tools';

console.log('hey')
console.log(AppWidth)

export default function Home({ navigation }) {
    const [orders, setOrders] = useState([
        { key: '1', address: 'Пугачева, 147', weight: '11.1кг', active: 1 },
        { key: '2', address: 'Посадского, 215', weight: '22.2кг', active: 1 },
        { key: '3', address: 'Летниковская, 10 стр. 5', weight: '33.3кг', active: 1 },
        { key: '4', address: 'Пресненская наб. 12', weight: '44.4кг', active: 1 },
        { key: '5', address: 'Ленина, 17', weight: '55.5кг', active: 1 },
        { key: '6', address: 'Жерара Депардье, 81', weight: '66.6кг', active: 1 },
        { key: '7', address: 'Адамса, 42', weight: '77.7кг', active: 1 },
        { key: '8', address: 'Вечнозеленая Аллея, 742', weight: '88.8кг', active: 1 },
        { key: '12', address: 'Посадского, 215', weight: '22.2кг', active: 1 },
        { key: '13', address: 'Летниковская, 10 стр. 5', weight: '33.3кг', active: 1 },
        { key: '14', address: 'Пресненская наб. 12', weight: '44.4кг', active: 1 },
        { key: '15', address: 'Ленина, 17', weight: '55.5кг', active: 1 },
        { key: '16', address: 'Жерара Депардье, 81', weight: '66.6кг', active: 1 },
        { key: '17', address: 'Адамса, 42', weight: '77.7кг', active: 1 },
        { key: '18', address: 'Вечнозеленая Аллея, 742', weight: '88.8кг', active: 1 }])

    return (
        <View style={styles.mainview}>
            <View style={{ margin: 5 }}>
                < OrdersView data={orders} navigation={navigation} />
            </View>
            < FAB navigation={navigation} elementColor='#F25D27' />

        </View>
    );
}

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        width: AppWidth,
        alignSelf:'center'
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
        borderBottomWidth: 1,
        marginBottom: 10
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