import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Player() {
  const [state, setState] = useState(0);
  const navigation: any = useNavigation();

  function ScoreLogic() {
    const value: number = Math.floor(Math.random() * 7);
    setState(value);
    navigation.navigate("Roll", { value: value });
  }

  return (
    <>
      <StatusBar color="white" />
      <View style={style.container}>
        <View style={style.titlecnt}>
          <Text style={style.title}>Player</Text>
        </View>

        <View style={style.Scorecon}>
          <View style={style.box}>
            <Text style={style.Score}>{state}</Text>
          </View>
        </View>

        <Pressable
          onPress={ScoreLogic}
          style={({ pressed }) => [style.btncnt, pressed && style.press]}
        >
          <View style={style.btn}>
            <Text style={style.txt}> Click Me </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  titlecnt: {
    flex: 2,
  },
  title: {
    marginTop: 140,
    textAlign: "center",
    color: "white",
    fontSize: 50,
    alignSelf: "center",
    textShadowColor: "red",
    textShadowRadius: 25,
  },
  Scorecon: {
    flex: 2,
  },
  box: {
    height: 150,
    width: 100,
    borderWidth: 3,
    borderColor: "white",
    marginTop: 60,
    alignSelf: "center",
  },
  Score: {
    color: "white",
    alignSelf: "center",
    fontSize: 50,
    marginTop: 40,
  },
  btncnt: {
    flex: 2,
    alignItems: "center",
  },
  btn: {
    marginTop: 60,
    height: 40,
    width: 150,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "blue",
    alignSelf: "center",
    shadowColor: "white",
    shadowRadius: 50,
  },
  txt: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    textShadowColor: "white",
    textShadowRadius: 25,
  },
  press: {
    opacity: 0.4,
  },
});
