import { View, StatusBar, Text, Image } from "react-native";
import { useEffect, useState } from "react";

export default function RollingScreen({ route, navigation }: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const value = route.params.value;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    navigation.replace("Game");
  });

  function ValuePic() {
    switch (value) {
      case 1:
        return <Image source={require("../../assets/dice1.jpg")} />;
      case 2:
        return <Image source={require("../../assets/dice2.jpg")} />;
      case 3:
        return <Image source={require("../../assets/dice3.jpg")} />;
      case 4:
        return <Image source={require("../../assets/dice4.jpg")} />;
      case 5:
        return <Image source={require("../../assets/dice5.jpg")} />;
      case 6:
        return <Image source={require("../../assets/dice6.jpg")} />;
    }
  }

  return (
    <>
      <StatusBar backgroundColor={"white"} />
      <View>
        {loading && <Text>...Loading</Text>}
        {ValuePic()}
      </View>
    </>
  );
}
