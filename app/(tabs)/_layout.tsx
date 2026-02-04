import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { Feather } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { Redirect, Tabs } from "expo-router";

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
