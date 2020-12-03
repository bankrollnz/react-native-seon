import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Seon from "react-native-seon";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 10,
  },
});


export default function App() {
  const [fingerprint, setFingerprint] = React.useState<string>("");

  const init = async () => {
    await Seon.init();
    await Seon.sessionId("abc123");
    const newFingerprint = await Seon.fingerprint();
    setFingerprint(newFingerprint);
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {fingerprint}</Text>
    </View>
  );
}
