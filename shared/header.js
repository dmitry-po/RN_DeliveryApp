import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title }) {
    const openMenu = () => { navigation.openDrawer() }
    return (
        <View style={{ width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons
                name='menu'
                size={28}
                onPress={openMenu}
                color='white'
            />
            <Text style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: 0.5,
                marginLeft:32
            }}>{title}</Text>
        </View>
    )
}