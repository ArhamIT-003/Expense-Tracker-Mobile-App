import { Colors } from "@/constants/Colors";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface ButtonPropsType {
  children: React.ReactNode;
  onPress: () => void;
  newStyle?: Object;
  mode?: string;
}

export default function Button({
  children,
  onPress,
  newStyle,
  mode,
}: ButtonPropsType) {
  return (
    <View style={newStyle}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.App.primary,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: Colors.App.text,
    textAlign: "center",
  },
  flatText: {
    color: Colors.App.primary,
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
});
