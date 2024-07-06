import { View, Text, StyleSheet, FlatList } from "react-native";
import ExpenseItem from "./Expense-Item";
import { ExpenseType } from "@/Types";

interface ListProps {
  expense: ExpenseType[];
}

interface renderItemTypes {
  item: ExpenseType;
}

function renderItem({ item }: renderItemTypes) {
  return (
    <ExpenseItem
      id={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  );
}
export default function ExpensesList({ expense }: ListProps) {
  return (
    <FlatList
      data={expense}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});
