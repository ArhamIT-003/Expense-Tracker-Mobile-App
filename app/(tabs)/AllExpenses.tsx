import ExpensesOutput from "@/components/Expense/Expense-Output";
import { RootState } from "@/store/redux/store";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function AllExpenses() {
  const expenses = useSelector((state: RootState) => state.expenses);

  return <ExpensesOutput expenses={expenses} periodName="Total" />;
}

const styles = StyleSheet.create({});
