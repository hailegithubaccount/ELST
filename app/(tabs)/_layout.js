
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Main Login Screen */}
      <Stack.Screen name="index" />
      <Stack.Screen name="openPage" />
      <Stack.Screen name="AddMoney" />
      <Stack.Screen name="Atm" />
      
    
      
    </Stack>
  );
}
