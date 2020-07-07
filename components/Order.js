import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, De } from 'react-native';
import { getAllOrderLines, updateOrderLines } from '../data/orderDetails';
import { setOrderAddress } from '../data/orders';
import { MaterialIcons } from '@expo/vector-icons';


export default function Order({ navigation }) {
    const order = navigation.getParam('item');
    var allOrderLines = useRef(Object.assign([], getAllOrderLines(order.key))).current;
    var newAddress = useRef(order.address);
    var modifiedLines = useRef([]);

    const [isAddressModified, setIsAddressModified] = useState(false);
    const [isLinesModified, setIsLinesModified] = useState(false);
    const [activeLines, setActiveLines] = useState(allOrderLines.filter((item) => item.active));
    const [deletedLines, setDeletedLines] = useState(allOrderLines.filter((item) => !item.active))

    function checkAddress(text) {
        newAddress.current = text
        text === order.address ? setIsAddressModified(false) : setIsAddressModified(true)
    }

    const deleteLine = (line) => {
        var _idx = allOrderLines.indexOf(line)
        if (modifiedLines.current.includes(_idx)) {
            modifiedLines.current = modifiedLines.current.filter((item) => item != _idx)
        } else {
            modifiedLines.current.push(_idx)
        }
        var new_line = Object.assign({}, line)
        new_line.active = !new_line.active
        allOrderLines[_idx] = new_line
        setActiveLines(allOrderLines.filter((item) => item.active))
        setDeletedLines(allOrderLines.filter((item) => !item.active))
        if (modifiedLines.current.length > 0) {
            setIsLinesModified(true);
        } else {
            setIsLinesModified(false);
        }
    }


    const updateOrder = () => {
        if (activeLines.length === 0) {
            alert('Заказ не содержит активных строк. Сохранение запрещено');
        } else {
            setOrderAddress(order, newAddress.current);
            updateOrderLines(order.key, allOrderLines);
            navigation.navigate('OpenOrders', {});
        }
    }

    const cancelUpdates = () => { navigation.goBack() }


    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.header}>Заказ {order.key}</Text>

                <View style={{ margin: 8, marginBottom:0 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        < MaterialIcons name='person' size={22} />
                        <Text style={styles.subHeader}>{isAddressModified && '*'}Заказчик: </Text>
                    </View>
                    <Text style={styles.notEditableText}>{order.user}</Text>
                </View>

                <View style={{ margin: 8, marginBottom:0 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        < MaterialIcons name='home' size={22} />
                        <Text style={styles.subHeader}>{isAddressModified && '*'}Адрес доставки: </Text>
                    </View>
                    <TextInput defaultValue={order.address} onChangeText={checkAddress} style={styles.editableText} />
                </View>


                <View style={{ margin: 8, marginBottom:0 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        < MaterialIcons name='work' size={22} />
                        <Text style={styles.subHeader}>Вес отправления:</Text>
                    </View>
                    <Text style={styles.notEditableText}>{order.weight}</Text>
                </View>

                <View style={{ margin: 8, marginBottom:0, flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        < MaterialIcons name='shopping-cart' size={22} />
                        <Text style={styles.subHeader}>{isLinesModified && '*'}Содержимое:</Text>
                    </View>
                    <FlatList
                        data={allOrderLines.sort((a,b) => {
                            var a_num = a.active ? a.lineNum : a.lineNum + 99999
                            var b_num = b.active ? b.lineNum : b.lineNum + 99999
                            return (a_num-b_num)
                        })}
                        keyExtractor={item => item.lineNum }
                        style={{marginTop:8}}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.itemButton} onPress={() => deleteLine(item)}>
                                < MaterialIcons name={item.active ? 'clear' : 'add'} color={item.active ? '#F25D27' : '#025159'} size={24} />
                                <Text style={item.active ? styles.itemEnabledText : styles.itemNotEnabledText}>{item.content}, {item.volume} {item.unit};</Text>
                            </TouchableOpacity>
                        )} />
                </View>
            </View>



            <View style={{ alignSelf: 'flex-end', height: 45, flexDirection: 'row', paddingTop: 10, justifyContent: 'center' }}>
                <TouchableOpacity onPress={cancelUpdates}
                    style={{ backgroundColor: 'white', padding: 8, borderRadius: 5, marginLeft: 8 }}>
                    <Text style={{ color: '#F25D27', fontWeight: '500' }}>ОТМЕНИТЬ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(updateOrder)} disabled={!(isLinesModified || isAddressModified)}
                    style={{ backgroundColor: (isLinesModified || isAddressModified ? '#025159' : '#777'), padding: 8, borderRadius: 5, marginLeft: 8 }}>
                    <Text style={{ color: 'white', fontWeight: '500' }}>СОХРАНИТЬ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1, 
        //height: '98%',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    editableText: {
        paddingVertical: 8,
        borderBottomWidth: 1,
    },
    notEditableText: {
        paddingVertical: 8,
        borderBottomWidth: 0,
    },
    itemButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    itemEnabledText: {
        marginLeft: 5
    },
    itemNotEnabledText: {
        marginLeft: 5,
        textDecorationLine: 'line-through',
        color: '#979797'
    }
})