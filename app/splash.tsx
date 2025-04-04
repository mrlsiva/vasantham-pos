import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/login");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vasantham POS</Text>
      <ActivityIndicator size="large" color="#19AD9F" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
