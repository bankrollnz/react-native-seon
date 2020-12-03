import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Seon from 'react-native-seon';

export default function App() {
  const [fingerprint, setFingerprint] = React.useState<string>("");

  const init = async () => {
    await Seon.init();
    await Seon.sessionId("abc123");
    const fingerprint = await Seon.fingerprint();
    setFingerprint(fingerprint);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
  },
});
