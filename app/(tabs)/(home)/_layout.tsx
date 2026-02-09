import { theme } from "@/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            //we mus add aschild attribute to the link to make it work with pressable
            <Link href="/new" asChild>
              {/*htslop makes the touchable area bigger*/}
              <Pressable hitSlop={20}>
                <AntDesign
                  name="plus-circle"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="plants/[plantId]" options={{ title: "" }} />
    </Stack>
  );
}
