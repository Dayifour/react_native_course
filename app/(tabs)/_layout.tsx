import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Link, Redirect, Tabs } from "expo-router";
import { Pressable } from "react-native";
//for intercepting the onboarding screen, we can use a variable to check if the user has finished onboarding or not

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding,
  );
  if (!hasFinishedOnboarding) {
    //if the user has not finished onboarding, we show the onboarding screen instead of the tabs
    return <Redirect href="/onboarding" />;
  }

  return (
    //these tabs exists even if we don't added them manually in the layout
    //there is exactly one layout per folder
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
          headerRight: () => (
            //we mus add aschild attribute to the link to make it work with pressable
            <Link href="/new" asChild>
              {/*htslop makes the touchable area bigger*/}
              <Pressable style={{ marginRight: 18 }} hitSlop={20}>
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
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
