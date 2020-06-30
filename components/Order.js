import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import getOrderLines from '../data/orderDetails';
import { setOrderAddress } from '../data/orders';
import { MaterialIcons } from '@expo/vector-icons';

export default function Order({ navigation }) {
    const order = navigation.getParam('item');

    const [isAddressModified, setIsAddressModified] = useState(false);
    const [isLinesModified, setIsLinesModified] = useState(false);
    const [isModified, setIsModified] = useState(false)
    const [saveButtonColor, setSaveButtonColor] = useState('#777');

    var newAddress = order.address
    const [orderLines, setOrderLines] = useState(getOrderLines(order.key));
    const [deletedLines, setDeletedLines] = useState([])

    function setModified() {
        if (isAddressModified || isLinesModified) {
            setIsModified(true);
            setSaveButtonColor('#025159');
        }
        else {
            setIsModified(false);
            setSaveButtonColor('#777');
        }
    }

    function checkAddress(text) {
        setIsAddressModified(true);
        setModified();
        newAddress = text
    }

    const deleteLine = (line) => {
        setIsLinesModified(true);
        setModified();
        setDeletedLines(prevList => [...prevList, line])
        setOrderLines(prevList => prevList.filter((item) => item != line))
    }

    function restoreLine(line) {
        if (deletedLines.length === 1) {
            setIsLinesModified(false)
        }
        setModified();
        setDeletedLines(prevList => prevList.filter((item) => item != line))
        setOrderLines(prevList => [...prevList, line])
    }

    const updateOrder = () => {
        setOrderAddress(order, newAddress);
        navigation.navigate('OpenOrders', {})
    }
    const cancelUpdates = () => { navigation.goBack() }


    return (
        <View style={{ margin: 10, flex: 1, backgroundColor: 'white', padding: 5, borderRadius: 5 }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.header}>Заказ {order.key}</Text>
                <View style={{ margin: 8 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        < MaterialIcons name='home' size={22} />
                        <Text style={styles.text}>{isAddressModified && '*'}Адрес доставки: </Text>
                    </View>
                    <TextInput defaultValue={newAddress} onChangeText={checkAddress} style={styles.textInput} />
                </View>

                <View style={{ margin: 8 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        < MaterialIcons name='work' size={22} />
                        <Text style={styles.text}>Вес отправления:</Text>
                    </View>
                    <Text style={styles.textInput}>{order.weight}</Text>
                </View>

                <View style={{ margin: 8 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        < MaterialIcons name='shopping-cart' size={22} />
                        <Text style={styles.text}>{isLinesModified && '*'}Содержимое:</Text>
                    </View>
                    <FlatList
                        data={orderLines}
                        keyExtractor={item => item.lineNum}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }} onPress={() => deleteLine(item)} >
                                < MaterialIcons
                                    name='clear'
                                    color='#F25D27'
                                    size={24}
                                />
                                <Text style={{ marginLeft: 5 }}>{item.content}, {item.volume} {item.unit};</Text>
                            </TouchableOpacity>
                        )} />
                    {(deletedLines.length > 0) && (<View>
                        <Text>------------------------------</Text>
                        <FlatList
                            data={deletedLines}
                            keyExtractor={item => item.lineNum}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }} onPress={() => restoreLine(item)} >
                                    < MaterialIcons
                                        name='add'
                                        color='#025159'
                                        size={24}
                                    />
                                    <Text style={{ marginLeft: 5, textDecorationLine: 'line-through', color: '#979797' }}>{item.content}, {item.volume} {item.unit};</Text>
                                </TouchableOpacity>
                            )} />
                    </View>)}
                </View>
            </View>



            <View style={{ alignSelf: 'flex-end', height: 45, flexDirection: 'row', paddingTop: 10, justifyContent: 'center' }}>
                <TouchableOpacity onPress={cancelUpdates}
                    style={{ backgroundColor: 'transparent', padding: 8, borderRadius: 5, marginLeft: 8 }}>
                    <Text style={{ color: '#F25D27', fontWeight: '500' }}>ОТМЕНИТЬ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={updateOrder} disabled={!isModified}
                    style={{ backgroundColor: saveButtonColor, padding: 8, borderRadius: 5, marginLeft: 8 }}>
                    <Text style={{ color: 'white', fontWeight: '500' }}>СОХРАНИТЬ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    textInput: {
        paddingVertical: 8,
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 8
    }
})