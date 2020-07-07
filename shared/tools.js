import React, { useState } from 'react';
import { TouchableOpacity, Text, Dimensions, View, FlatList, StyleSheet, Linking, CheckBox } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import getOrderLines, { getActiveLines } from '../data/orderDetails';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
export const AppWidth = SCREEN_WIDTH > 1000 ? 975 : SCREEN_WIDTH;

const numColumns = Math.floor(AppWidth / 200);

export function BottomNavigation({ menu, navigation }) {
    return (
        <View style={{
            backgroundColor: 'white', opacity: 0.9,
            height: 56, position: 'absolute', bottom: 0, width: '100%', elevation: 3,
            justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
        }}>
            {menu.map(item => (
                <TouchableOpacity
                    style={{ flex: 1, alignItems: 'center' }}
                    onPress={item.onPress}
                    key={item.name}>
                    <MaterialIcons name={item.icon} size={32} color={item.color} />
                    <Text color={item.color}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}


export function FAB({ navigation, color = 'white', elementColor = 'black', size = 56 }) {
    return (
        <TouchableOpacity style={{
            position: 'absolute',
            margin: 24,
            right: 0,
            bottom: 0,
            borderRadius: 90,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color,
            width: size,
            height: size,
            elevation: 3
        }}
            onPress={() => navigation.navigate('OpenOrders')}>
            <MaterialIcons name='add' size={40} color={elementColor} />
        </TouchableOpacity>
    )
};

export function OrdersView({ data, onPress }) {
    /*
    // Filling empty cells
    const fullRows = Math.floor(data.length / numColumns);
    const emptyItems = data.length - fullRows * numColumns > 0 ? (fullRows + 1) * numColumns - data.length : 0;
    if (emptyItems > 0) {
        for (var i = 0; i < emptyItems; i++) {
            data.push({ key: 'blank' + i, name: '', address: '', weight: '0' });
        }
    }
    */

    return (
        <FlatList
            data={data}
            numColumns={numColumns}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => onPress(item)}
                        activeOpacity={0.5}
                        style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 1, height: 3 },
                            shadowRadius: 5,
                            shadowOpacity: 0.1,
                            elevation: 1,
                            flex: 1,
                            height: 100,
                            backgroundColor: 'white',
                            borderRadius: 5,
                            margin: 5,
                            padding: 5
                        }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            padding: 5,
                            //margin:5,
                            justifyContent: 'center'
                        }}>
                            Заказ {item.key}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ paddingLeft: 5, paddingRight: 5, flexShrink: 1 }}>{item.address}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ paddingLeft: 5, paddingRight: 5 }}>{item.weight}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export function OrderDetails({ item, buttons, visible, navigation }) {
    //const [visibility, setVisibiility] = useState(visible)
    const editOrder = () => {
        visible(false);
        navigation.navigate('Order', { item: item });
    }
    const firstButtonPressHandler = () => {
        buttons[0].onPress(item);
    }
    const secondButtonPressHandler = () => {
        buttons[1].onPress(item);
    }
    const orderLines = getActiveLines(item.key);
    const uri = "https://www.google.ru/maps/search/" + item.address

    return (
        <View
            style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', elevation: 7 }}>
            <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.6 }}
                onStartShouldSetResponder={() => visible(false)}></View>
            <View style={{ position: 'absolute', width: 300, backgroundColor: 'white', opacity: 1, borderRadius: 10, padding: 10 }}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.header}>Заказ {item.key}</Text>
                        {!item.active && (<TouchableOpacity onPress={editOrder}>
                            <MaterialIcons name='edit' size={24} />
                        </TouchableOpacity>)
                        }
                    </View>
                    <Text style={styles.text}>Адрес доставки:</Text>
                    <Text style={{ color: 'blue' }} onPress={() => (Linking.openURL(uri))}>{item.address}</Text>
                    <Text style={styles.text}>Вес отправления:</Text>
                    <Text>{item.weight}</Text>
                    <Text style={styles.text}>Содержимое: </Text>
                    <FlatList
                        data={orderLines}
                        keyExtractor={item => item.lineNum}
                        renderItem={({ item }) => (<Text> - { item.content}, { item.volume} {item.unit};</Text>)} />
                </View>
                <View style={{ alignSelf: 'flex-end', flex: 0, flexDirection: 'row', paddingTop: 10 }}>
                    <TouchableOpacity onPress={firstButtonPressHandler}
                        style={{ backgroundColor: 'white', padding: 8, borderRadius: 5, marginLeft: 8 }}>
                        <Text style={{ color: '#F25D27', fontWeight: '500' }}>{buttons[0].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={secondButtonPressHandler}
                        style={{ backgroundColor: '#025159', padding: 8, borderRadius: 5, marginLeft: 8 }}>
                        <Text style={{ color: 'white', fontWeight: '500' }}>{buttons[1].title}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        paddingTop: 10,
        fontWeight: 'bold'
    }
})
