import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, CheckBox, TouchableOpacity } from 'react-native';
import getOrderLines from '../data/orderDetails';

export default function Order({ navigation }) { 
    const [isModified, setIsModified] = useState(false)
    const [saveButtonColor, setSaveButtonColor] = useState('#777')
    const orderLines = getOrderLines(navigation.getParam('key'));
    function checkAddress() {
        setIsModified(true)
        setSaveButtonColor('#025159')
    }


    return (
        <View style={{ margin: 10, flex: 1 }}>
            <Text style={styles.header}>Заказ {navigation.getParam('key')}</Text>
            <Text style={styles.text}>{isModified && '*'}Адрес доставки: </Text>
            <TextInput defaultValue={navigation.getParam('address')} onChangeText={() => checkAddress()} />
            <Text style={styles.text}>Вес отправления:</Text>
            <Text>{navigation.getParam('weight')}</Text>
            <Text style={styles.text}>Содержимое: </Text>
            <FlatList
                data={orderLines}
                keyExtractor={item => item.lineNum}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:8}}>
                        <CheckBox style={{marginRight:4}} />
                        <Text>{item.content}, {item.volume} {item.unit};
                        </Text></View>
                )} />
            <View style={{ alignSelf: 'flex-end', height: 45, flexDirection: 'row', paddingTop: 10, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={{ backgroundColor: 'transparent', padding: 8, borderRadius: 5, marginLeft: 8 }}>
                    <Text style={{ color: '#F25D27', fontWeight: '500' }}>Отменить</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} disabled={!isModified}
                    style={{ backgroundColor: saveButtonColor, padding: 8, borderRadius: 5, marginLeft: 8 }}>
                    <Text style={{ color: 'white', fontWeight: '500' }}>Сохранить</Text>
                </TouchableOpacity>
            </View>
        </View>
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