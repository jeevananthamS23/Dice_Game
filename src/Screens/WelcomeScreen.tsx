import store from "../../Redux/store.js";
import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";

export default function WelcomeScreen({route,navigation}:any) {
 useEffect(()=>{
     
     setTimeout(()=>{
       navigation.replace('Game');
     },3000)

 },[ ]);

  return <>
  <StatusBar backgroundColor={'white'}/>
  <View style={style.Maincon}>
  <Text style={style.txt}>WeLcOmE tO GaMe Of tHrOnEs</Text>
  </View>
  </>
      

}

const style = StyleSheet.create({
  Maincon: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  txt:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    textShadowColor:'red',
    textShadowRadius:30
  }
 
});
