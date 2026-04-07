import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Welcome() {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        {/* welcome image */}
        <Image
          source={require("@/assets/images/welcome.png")}
          contentFit="contain"
          style={styles.welcomeImage}
        />
        {/* title */}
        <View style={{ gap: 30 }}>
          <Text style={styles.title}>Linkup!</Text>
          <Text style={styles.description}>
            Where every thought finds a home and every image tells a stroy
          </Text>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Button
            title="Get Started"
            onPress={() => router.push("/signup")}
            buttonStyle={{ marginHorizontal: wp(3) }}
            hasShadow={true}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Pressable onPress={() => router.push("/login")}>
              <Text
                style={[styles.loginText, { color: theme.colors.primaryDark }]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: wp(4),
  },
  welcomeImage: {
    width: wp(100),
    height: hp(30),
    alignSelf: "center",
  },
  title: {
    fontSize: hp(4),
    fontWeight: "700",
    textAlign: "center",
    color: theme.colors.text,
  },
  description: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    textAlign: "center",
    fontSize: hp(1.6),
    color: theme.colors.text,
  },
});
