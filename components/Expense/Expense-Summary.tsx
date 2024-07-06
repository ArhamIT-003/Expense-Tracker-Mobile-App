import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";
import { ExpenseType } from "@/Types";

interface SummaryProps {
  periodName: string;
  expenses: ExpenseType[];
}
export default function ExpensesSummary({
  periodName,
  expenses,
}: SummaryProps) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.expenseSum}>Rs {expenseSum}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.App.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
  },
  period: {
    fontSize: 14,
    color: Colors.App.primary,
  },
  expenseSum: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.App.primary,
  },
});
