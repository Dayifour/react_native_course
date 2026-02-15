import { SplashScreen, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
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
