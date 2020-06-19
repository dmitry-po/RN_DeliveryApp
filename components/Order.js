import React from 'react';
import { View, Text, Button, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { BottomNavigation } from '../shared/tools';

export default function Order({ navigation }) {
    const uri = "https://www.google.ru/maps/search/" + navigation.getParam('address')
    const orderList = [{ lineNum: '1', content: 'Огурцы маринованные', volume: '1', unit: 'банка' },
    { lineNum: '2', content: 'Картофель молодой', volume: '0.6', unit: 'кг' },
    { lineNum: '3', content: 'Горошек консервированный', volume: '1', unit: 'банка' },
    { lineNum: '4', content: 'Морковь свежая', volume: '0.3', unit: 'кг' },
    { lineNum: '5', content: 'Майонез', volume: '1', unit: 'шт' },
    { lineNum: '6', content: 'Колбаса', volume: '0.5', unit: 'кг' }]

    const cancelOrder = () => {
        alert('Заказ будет отменен');
        navigation.goBack();
    }

    const goBack = () => navigation.goBack();

    const goToActiveOrders = () => navigation.navigate('Home');

    const leftButtonFunction = navigation.getParam('active') === 0 ? goBack : cancelOrder;
    const leftButtonText = navigation.getParam('active') === 0 ? 'Вернуться' : 'Отказаться';
    const leftButtonIcon = navigation.getParam('active') === 0 ? 'arrow-back' : 'cancel';
    const rightButtonFunction = navigation.getParam('active') === 0 ? goToActiveOrders : goBack;
    const rightButtonText = navigation.getParam('active') === 0 ? 'Принять' : 'Завершить';
    const rightButtonIcon = navigation.getParam('active') === 0 ? 'add' : 'done';

    const menu = [{name: leftButtonText, icon:leftButtonIcon, color:'#F25D27', onPress:leftButtonFunction},
                  {name: rightButtonText, icon: rightButtonIcon, color:'#025159', onPress:rightButtonFunction}]

    console.log(uri)
    return (
        <>
            <View style={{ margin: 10, flex: 1 }}>
                <Text style={styles.header}>Заказ #{navigation.getParam('key')}</Text>
                <Text style={styles.text}>
                    Адрес доставки:
                </Text>
                <Text style={{ color: 'blue' }} onPress={() => (Linking.openURL(uri))}>{navigation.getParam('address')}</Text>
                <Text style={styles.text}>Вес отправления:</Text>
                <Text>{navigation.getParam('weight')}</Text>
                <Text style={styles.text}>Содержимое: </Text>
                {orderList.map(item => (
                    <Text key={item.lineNum}>{item.lineNum}. { item.content}, { item.volume} {item.unit};</Text>
                ))}
            </View>
            < BottomNavigation menu={menu} />
            
        </>
    );
}

const styles = StyleSheet.create({
    mainview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    windowview: {
        backgroundColor: 'white',
        borderRadius: 5,
        opacity: 0.95,
        margin: 10,
        padding: 10
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textInput: {
        paddingTop: 5,
        borderBottomColor: '#025159',
        borderBottomWidth: 1
    },
    text: {
        paddingTop: 10,
        fontSize: 16,
        fontWeight: 'bold'
    }
})