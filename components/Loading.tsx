import { theme } from "@/constants/theme";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loading({
  size = "small",
  color = theme.colors.primary,
}: {
  size?: "small" | "large";
  color?: string;
}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
