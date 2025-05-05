import React from 'react';
import { View, Text } from 'react-native';
import { Drawer } from 'expo-router/drawer';

// Dummy screens
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>🏠 Home</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>⚙️ Settings</Text>
    </View>
  );
}

export default function DashboardIndex() {
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Screen 
        options={{
          headerTitle: "Dashboard",
          drawerLabel: "Home"
        }}
      />
      <Text>Dashboard Content</Text>
    </View>
  );
}