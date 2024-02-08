import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/home-screen";

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
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
