import {View,StyleSheet, StatusBar} from "react-native";
import Player from '../Componenets/Player';


export default function MainPage(){
    return<>
     <StatusBar backgroundColor={'white'}/>
     <View style={style.Main}>
        <Player/>
        <Player/>
     </View>
    
    </>
}

const style=StyleSheet.create({
    Main:{
        flex:1,
        flexDirection:'row'
    }
})