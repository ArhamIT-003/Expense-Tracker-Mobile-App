import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { ExpenseType } from "@/Types";
import { formatDate } from "@/utils/date";

export default function ExpenseItem({ id, title, amount, date }: ExpenseType) {
  const router = useRouter();

  function onPressHandler() {
    router.push(`ManageExpense/${id}`);
  }

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPressHandler}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={styles.text}>{formatDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>Rs. {amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: Colors.App.primary500,
    marginVertical: 8,
    flexDirection: "row",
    borderRadius: 6,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    justifyContent: "space-between",
  },
  text: {
    color: Colors.App.white,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.App.background,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    minWidth: 100,
  },
  amount: {
    color: Colors.App.primary,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
