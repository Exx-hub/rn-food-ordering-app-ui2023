import { StatusBar } from "expo-status-bar";
import AppNavigator from "./navigation/AppNavigator";
import { View } from "react-native";

export default function App() {
  return (
    <View className="flex-1">
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}
