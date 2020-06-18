import React, { useState } from "react";
import { Text, View, Button } from "react-native";

function Dot(props) {
  const [isVisible, setVisibility] = useState(false);
  let color = isVisible ? "orange" : "green";
  return (
    <Text
      style={{
        width: props.size,
        height: props.size,
        backgroundColor: color,
        margin: 2
      }}
      onPress={() => {
        setVisibility(!isVisible);
      }}
    />
  );
}

function Row(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Dot size={props.size} />
      <Dot size={props.size} />
      <Dot size={props.size} />
      <Dot size={props.size} />
    </View>
  );
}

function Matrix(props) {
  const cellWidth = (props.width - 10 * 2) / 4;
  return (
    <>
      <Row size={cellWidth} />
      <Row size={cellWidth} />
      <Row size={cellWidth} />
      <Row size={cellWidth} />
    </>
  );
}

export default function MemoryGame({ navigation }) {
  return (
    <View>
      <Matrix width="300" />
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
