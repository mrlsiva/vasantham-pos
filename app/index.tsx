import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/splash" />;
}
// import { Stack } from "expo-router";

// export default function Index() {
//   return (
//     <Stack>
//       <Stack.Screen name="login" options={{ title: "Login" }} />
//       <Stack.Screen name="home" options={{ title: "Home" }} />
//     </Stack>
//   );
// }

