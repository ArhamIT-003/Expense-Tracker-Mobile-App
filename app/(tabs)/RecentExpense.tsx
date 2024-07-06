import ExpensesOutput from "@/components/Expense/Expense-Output";
import { RootState } from "@/store/redux/store";
import { getDateMinusDays } from "@/utils/date";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function RecentExpense() {
  const expenses = useSelector((state: RootState) => state.expenses);

  const recentExpense = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return <ExpensesOutput expenses={recentExpense} periodName="Last 7 days" />;
}

const styles = StyleSheet.create({});
