import { Tabs, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import IconButton from "@/components/UI/Icon-Button";

export default function TabsLayout() {
  const router = useRouter();
  return (
    <Tabs
      initialRouteName="AllExpenses"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.App.background },
        headerTitleStyle: { fontWeight: "light", color: "#fff" },
        tabBarActiveTintColor: Colors.App.primary,
        tabBarInactiveTintColor: Colors.App.secondary,
        tabBarLabelStyle: { fontSize: 12 },
        headerRight: () => {
          return (
            <IconButton
              name="add"
              color={"#fff"}
              size={24}
              onPress={() => router.push("AddExpense")}
            />
          );
        },

        tabBarStyle: {
          backgroundColor: Colors.App.background,
        },
      }}
    >
      <Tabs.Screen
        name="RecentExpense"
        options={{
          title: "Recent-Expense",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AllExpenses"
        options={{
          title: "All-Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
