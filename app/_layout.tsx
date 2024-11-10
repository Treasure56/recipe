import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();
export default function layout() {
  return (
  <QueryClientProvider client={queryClient}>
      <Stack>
        {
          routes.map((route) =>
            <Stack.Screen key={route} name={route} options={{ headerShown: false, animation: "fade_from_bottom" }} />
          )
        }
    </Stack>
  </QueryClientProvider>
  )
}

const routes = ["index", "about", "recipe", "search"]