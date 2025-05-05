import { Drawer } from 'expo-router/drawer';
import { useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedCustomButton from '../../components/ThemedForm/ThemedButtom';

export default function DashboardLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;


  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primary,
        },
        headerTintColor: '#fff',
        drawerActiveTintColor: theme.primary,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Dashboard",
          drawerLabel: "Home",
          drawerIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
           <ThemedCustomButton title="Logout"/>
    </Drawer>
  );
}