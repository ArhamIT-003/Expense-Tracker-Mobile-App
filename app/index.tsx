import { Redirect } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function StartPage() {
  return <Redirect href={"/AllExpenses"} />;
}

const styles = StyleSheet.create({});
