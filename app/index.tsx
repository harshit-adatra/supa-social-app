import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";
import { Button, Text } from "react-native";
export default function Index() {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>Index</Text>
      <Button title="Go to Settings" onPress={() => router.push("/welcome")} />
    </ScreenWrapper>
  );
}
