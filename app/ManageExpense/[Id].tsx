import ManageInput from "@/components/Manage/Manage-Input";
import Button from "@/components/UI/Button";
import IconButton from "@/components/UI/Icon-Button";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function ManageExpenses() {
  const { Id } = useLocalSearchParams();
  const idString = Array.isArray(Id) ? Id[0] : Id;
  console.log(idString);
  return <ManageInput id={idString} method="update" />;
}

const styles = StyleSheet.create({});
