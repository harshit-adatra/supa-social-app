import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import {
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";
import Loading from "./Loading";
type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  hasShadow?: boolean;
};
const Button = ({
  title,
  onPress,
  disabled,
  loading,
  buttonStyle,
  hasShadow,
  textStyle,
}: ButtonProps) => {
  const shadowStyle = {
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  };
  if (loading) {
    return (
      <View style={[styles.button, buttonStyle, { backgroundColor: "white" }]}>
        <Loading />
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    height: hp(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.xl,
  },
  text: {
    color: "white",
    fontSize: hp(2.5),
    fontWeight: "700",
  },
});
