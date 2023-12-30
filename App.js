import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoScreen from "./src/screens/TodoScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <TodoScreen />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
