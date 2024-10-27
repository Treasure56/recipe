import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function layout() {
  return (
    <Stack>
        {
          routes.map((route) =>
            <Stack.Screen key={route} name={route} options={{ headerShown: false, animation: "fade_from_bottom" }} />
          )
        }
    </Stack>
  )
}

const routes = ["index", "about", "recipe"]