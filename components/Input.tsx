import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import { RefObject } from "react";
import {
    StyleProp,
    StyleSheet,
    TextInput,
    View,
    ViewStyle,
} from "react-native";
type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
  inputRef?: RefObject<TextInput>;
  secureTextEntry?: boolean;
};
export default function Input(props: InputProps) {
  const {
    placeholder,
    value,
    onChangeText,
    containerStyle,
    icon,
    inputRef,
    secureTextEntry,
  } = props;
  return (
    <View style={[styles.container, containerStyle && containerStyle]}>
      {icon && icon}
      <TextInput
        style={{ flex: 1 }}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textLight}
        ref={inputRef}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(7.2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    paddingHorizontal: 18,
    gap: 10,
    borderCurve: "continuous",
  },
});
