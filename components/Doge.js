import React, { useState, svg, Component } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  Button,
  Dimensions,
  StyleSheet
} from "react-native";

export default function HelloDoge({ navigation }) {
  const [name, setName] = useState("Nonamr");
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  const ratio = 9 / 16;
  var tmp = "";
  return (
    <View style={styles.mainview}>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            width: SCREEN_WIDTH,
            padding: 10,
            textAlign: "center",
            backgroundColor: "orange",
            fontFamily: "Comic Sans MS"
          }}
        >
          Welkome to Doge klup!
        </Text>
        <Image
          source={{
            uri:
              "https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
          }}
          style={{ height: SCREEN_WIDTH * ratio, width: SCREEN_WIDTH }}
        />
      </View>
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            width: SCREEN_WIDTH,
            paddingBottom: 10
          }}
        >
          <Text>Login: </Text>
          <TextInput
            defaultValue="User"
            style={styles.textInput}
            name="HumanName"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: SCREEN_WIDTH,
            paddingBottom: 10
          }}
        >
          <Text>Password: </Text>
          <TextInput
            defaultValue="***"
            style={styles.textInput}
            onChangeText={text => (tmp = text)}
            name="HumanName"
          />
        </View>
        <Button
          title="Log in"
          onPress={() => navigation.navigate("MemoryGame")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    justifyContent: "center",
    alignItems: "center",
    position: 0
  },
  textInput: {
    borderWidth: 1,
    color: "grey",
    flex: 1
  }
});
