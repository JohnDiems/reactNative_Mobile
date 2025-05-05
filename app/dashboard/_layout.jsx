import { Drawer } from 'expo-router/drawer';
import { useColorScheme, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import ThemedCustomButton from '../../components/ThemedForm/ThemedButtom';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Logout Button at the Bottom */}
      <View style={styles.logoutContainer}>
        <ThemedCustomButton title="Logout" />
      </View>
    </View>
  );
};

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
    </Drawer>
  );
};

const styles = StyleSheet.create({
  logoutContainer: {
    // padding: 20,
    // borderTopWidth: 1,
    // borderColor: '#ccc',
  },
});

export default DashboardLayout;
