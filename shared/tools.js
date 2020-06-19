import React from 'react';
import { TouchableOpacity, Text, Dimensions, View, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


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
            <Text style={{ color: elementColor, fontSize: 40 }} >+</Text>
        </TouchableOpacity>
    )
};

export function OrdersView({ data, navigation }) {
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
                        onPress={() => navigation.navigate('Order', item)}
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
