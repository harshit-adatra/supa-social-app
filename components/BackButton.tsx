import ArrowLeftIcon from "@/assets/icons/ArrowLeft";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
const BackButton = ({ size = 26 }) => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <ArrowLeftIcon strokeWidth={2.5} color={theme.colors.text} size={size} />
    </Pressable>
  );
};

export default BackButton;
const styles = StyleSheet.create({
  button: {
    alignItems: "flex-start",
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: "rgba(0,0,0,0.07)",
  },
});
