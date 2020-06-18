import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import getOrdersView from '../shared/tools';

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

    const selectedOrdersView = getOrdersView(orders, navigation)

    return (
        <View style={styles.mainview}>
            <ScrollView>
                <View style={styles.windowview}>
                    { selectedOrdersView }
                </View>
            </ScrollView>
            <TouchableOpacity style={{
                position: 'absolute',
                right: '5%',
                bottom: '5%',
                paddingTop: -20,
                borderRadius: 90,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                width: 60,
                height: 60,
                elevation: 5
            }}
                onPress={() => navigation.navigate('OpenOrders')}>
                <Text style={{ color: '#F25D27', fontSize: 50 }} >+</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    mainview: {
        justifyContent: 'center',
        flex: 1
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
        padding: 5
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