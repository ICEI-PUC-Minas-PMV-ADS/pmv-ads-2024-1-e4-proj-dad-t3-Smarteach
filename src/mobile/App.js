import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import FirstScreen from "./src/screens/FirstScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Image
          StyleSheet
          source={"/assets/SMARTEACH.png"}
          style={{ width: 252, height: 100, resizeMode: "contain" }}
        />
      ) : (
        <FirstScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
