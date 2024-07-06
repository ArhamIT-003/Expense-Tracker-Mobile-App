import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ManageInput from "@/components/Manage/Manage-Input";

export default function AddExpense() {
  return <ManageInput method="Add" />;
}

const styles = StyleSheet.create({
  container: {},
});
