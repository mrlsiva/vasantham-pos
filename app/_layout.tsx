import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="splash" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerTitle: "Login" }} />
      <Stack.Screen name="home" options={{ headerTitle: "Home" }} />
      
    </Stack>
  );
}
