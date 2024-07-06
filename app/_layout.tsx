import { Colors } from "@/constants/Colors";
import store from "@/store/redux/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.App.background },
          headerTitleStyle: { fontWeight: "light", color: "#fff" },
          headerBackTitleStyle: { fontSize: 12 },
          headerBackTitleVisible: true,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="AddExpense"
          options={{ presentation: "modal", title: "Add-Expense" }}
        />
        <Stack.Screen
          name="ManageExpense/[Id]"
          options={{ presentation: "modal", title: "Manage-Expense" }}
        />
      </Stack>
    </Provider>
  );
}
