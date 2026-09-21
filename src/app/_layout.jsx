import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "../global.css";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2000000,
      retry: 3,
    },
  },
});


export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync().catch(() => { });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
