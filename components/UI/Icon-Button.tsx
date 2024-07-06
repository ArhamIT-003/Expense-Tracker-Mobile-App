import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface IconButtonProps {
  name: string;
  color: string;
  size: number;
  onPress?: () => void;
}

export default function IconButton({
  name,
  color,
  size,
  onPress,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={name as any} color={color} size={size} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
});
