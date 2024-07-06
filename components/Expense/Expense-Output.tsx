import { View, Text, StyleSheet, FlatList } from "react-native";
import ExpensesList from "./Expense-List";
import ExpensesSummary from "./Expense-Summary";
import { Colors } from "@/constants/Colors";
import { ExpenseType } from "@/Types";

interface ExpenseOutputInterface {
  expenses: ExpenseType[];
  periodName: string;
}
export default function ExpensesOutput({
  expenses,
  periodName,
}: ExpenseOutputInterface) {
  if (expenses.length <= 0) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>No expense data added yet !</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList expense={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: Colors.App.background,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.App.background,
  },
  notFoundText: {
    color: Colors.App.white,
    fontSize: 18,
  },
});
