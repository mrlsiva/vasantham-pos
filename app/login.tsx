import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Import navigation

  const handleLogin = () => {
    // You can add validation here before navigation
    router.push("/home"); // Navigate to Home
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f9fa", paddingHorizontal: 20 }}>
      <View style={{ width: 400, padding: 20, backgroundColor: "#fff", borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#333" }}>
          Welcome Back!
        </Text>

        <TextInput
          style={{
            width: "100%",
            padding: 12,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 6,
            marginBottom: 12,
            backgroundColor: "#fff"
          }}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={{
            width: "100%",
            padding: 12,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 6,
            marginBottom: 12,
            backgroundColor: "#fff"
          }}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          onPress={handleLogin} // Navigate to home when clicked
          style={{
            width: "100%",
            padding: 12,
            backgroundColor: "#19AD9F",
            borderRadius: 6,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 12, alignItems: "center" }}>
          <Text style={{ color: "#1B1E2C", fontSize: 14 }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
