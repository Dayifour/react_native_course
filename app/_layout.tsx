import * as QuickActions from "expo-quick-actions";
import { useQuickActionRouting } from "expo-quick-actions/router";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useQuickActionRouting();
  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Add Plant",
        subtitle: "Add a new plant to your collection",
        icon: Platform.OS === "ios" ? "Symbole:leaf" : "leaf",
        id: "0",
        params: { href: "/new" },
      },
    ]);
  }, []);

  //if we had more layouts, it would nest them in the app view view
  //so we can hide this tabs layout to avoid nesting tabs
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="onboarding"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="new"
        options={{ presentation: "modal", title: "New Plant" }}
      />
    </Stack>
  );
}
