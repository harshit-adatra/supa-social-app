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
export default function Signup() {
  const router = useRouter();
  const emailRef = useRef<string>("");
  const passwordRef = useRef<string>("");
  const nameRef = useRef<string>("");
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    if (
      nameRef.current === "" ||
      emailRef.current === "" ||
      passwordRef.current === ""
    ) {
      Alert.alert("Please enter your email and password");
      return;
    }
    console.log(nameRef.current, emailRef.current, passwordRef.current);

    setLoading(true);
  };
  return (
    <ScreenWrapper>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <BackButton />
        {/* Welcome Text */}
        <View>
          <Text style={styles.welcomeText}>Let&apos;s </Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Create an account to continue
          </Text>
          <Input
            placeholder="Enter your name"
            icon={<Icon name="user" size={26} strokeWidth={1.6} />}
            onChangeText={(text) => {
              nameRef.current = text;
            }}
          />
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
          {/* button */}
          <Button
            loading={loading}
            title="Sign up"
            onPress={() => {
              onSubmit();
            }}
          />
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}> Already have an account? </Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text
              style={[
                styles.footerText,
                { color: theme.colors.primaryDark, fontWeight: "500" },
              ]}
            >
              Login
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
