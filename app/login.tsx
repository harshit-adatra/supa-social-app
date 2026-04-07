import Icon from "@/assets/icons";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
    Alert,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
export default function Login() {
  const router = useRouter();
  const emailRef = useRef<string>("");
  const passwordRef = useRef<string>("");
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    if (emailRef.current === "" || passwordRef.current === "") {
      Alert.alert("Please enter your email and password");
      return;
    }
    console.log(emailRef.current, passwordRef.current);

    setLoading(true);
  };
  return (
    <ScreenWrapper>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <BackButton />
        {/* Welcome Text */}
        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome back</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please login to continue
          </Text>
          <Input
            placeholder="Enter your email"
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            onChangeText={(text) => {
              emailRef.current = text;
            }}
          />
          <Input
            placeholder="Enter your password"
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            secureTextEntry={true}
            onChangeText={(text) => {
              passwordRef.current = text;
            }}
          />
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          {/* button */}
          <Button
            loading={loading}
            title="Login"
            onPress={() => {
              onSubmit();
            }}
          />
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don&apos;t have an account? </Text>
          <Pressable onPress={() => router.push("/signup")}>
            <Text
              style={[
                styles.footerText,
                { color: theme.colors.primaryDark, fontWeight: "500" },
              ]}
            >
              Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(4),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: "700",
    color: theme.colors.text,
  },
  descriptionText: {
    fontSize: hp(1.5),
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: theme.colors.text,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.5),
  },
});
