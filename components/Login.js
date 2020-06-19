import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.mainview}>
      <View style={styles.windowview}>
        <Text style={{ fontSize: 23 }}>Вход</Text>
        <Text style={styles.text}>Телефон:</Text>
        <TextInput defaultValue='+7' style={styles.textInput} keyboardType='phone-pad' />
        <Text style={styles.text}>Пароль:</Text>
        <TextInput style={styles.textInput} placeholder='******' secureTextEntry={true} />
        <View style={{ paddingTop: 10 }}>
          <Button color='#F25D27' title="Войти" onPress={() => navigation.navigate("Home")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    justifyContent: 'center',
    backgroundColor: '#025159',
    alignItems: 'center',
    flex: 1
  },
  windowview: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 300,
    opacity: 0.95,
    margin: 10,
    padding: 10
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
