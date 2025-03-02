// _layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: '', // Remove the title
          headerShown: false, // Hide the entire header (optional)
        }}
      />
    </Stack>
  );
}