import React from 'react';
import { TouchableOpacity, Text, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const cardWidth = Math.floor(100 / Math.floor(SCREEN_WIDTH / 200)) - 2 + "%";

export default function getOrdersView(orders, navigation) {
    return (
        orders.map(item => (<TouchableOpacity
            key={item.key}
            onPress={() => navigation.navigate('Order', item)}
            activeOpacity={0.5}
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 1, height: 3 },
                shadowRadius: 5,
                shadowOpacity: 0.1,
                elevation: 3,
                width: cardWidth,
                height: 100,
                backgroundColor: 'white',
                borderRadius: 5,
                marginBottom: 5,
                padding: 5
            }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                padding: 5,
                //margin:5,
            }}>
                Заказ {item.key}
            </Text>
            <Text style={{ paddingLeft: 5, paddingRight: 5 }}>{item.address}</Text>
            <Text style={{ paddingLeft: 5, paddingRight: 5 }}>{item.weight}</Text>
        </TouchableOpacity>
        ))
    )
}