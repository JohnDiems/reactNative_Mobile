import { 
  StyleSheet,
  Text,
  View, 
  Image, 
  ActivityIndicator, 
  useColorScheme, 
  SafeAreaView, TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Colors } from "../../constants/Colors";
import { authService } from "../../components/API/AuthService";
import ThemedView from "../../components/ThemedView";
import ThemedInputField from "../../components/ThemedForm/ThemedInputField";
import ThemedCustomButton from "../../components/ThemedForm/ThemedButtom";
import ThemedError from "../../components/ThemedForm/ThemedError";
import logo from "../../assets/davao_logo.png";
import dcho from "../../assets/dcho.png";
import { useUserStore } from "../../store/userStore";

import React, { useState } from "react";

const LoginForm = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ 
    email: '',
    password: '' 
  });
  const [errors, setErrors] = useState({});

  const submitLogin = async () => {
    try {
      setIsLoading(true);
      const params = {
        email: form.email.trim(),
        password: form.password,
      };
      const response = await authService.login(params);
      if (response) {
        setErrors({});
        setUser(response.data.user);
        console.log("Login successful:", response);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={theme.primary} />
        <Text style={{ color: theme.textLight }}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <ThemedView style={styles.container} safe={true}>
      <Image source={dcho} style={styles.dcho} />
      <Text style={styles.title}>Housing Management</Text>
      <Text style={styles.title}>Information System</Text>
      <Text style={[styles.sm_text, { color: theme.text }]}>
        Davao City Housing Office
      </Text>
      <Text style={[styles.sm_sign, { color: theme.text }]}>
        Sign in to your account
      </Text>

      <Text>{user?.firstname}</Text>

      <View style={styles.inputContainer}>
        <ThemedInputField
          style={{ width: "380" }}
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          label="Email address"
        />
        <ThemedError error={errors?.errors?.email?.[0]} />
      </View>

      <View style={styles.inputContainer}>
        <ThemedInputField
          style={{ width: "380" }}
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
          secureTextEntry={true}
          label="Password"
        />
        <ThemedError error={errors?.errors?.password?.[0]} />
      </View>

      <View>
        <ThemedCustomButton
          title="Sign in"
          onPress={submitLogin}
        />
      </View>
      <View style={[styles.reserved, { marginTop: 10 }]}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={[styles.city, { color: theme.text }]}>
          © 2024 City Government of Davao City.
        </Text>
        <Text style={[styles.city, { color: theme.text }]}>
          All rights reserved.
        </Text>
      </View>
    </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dcho: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  logo: {
    width: 120,
    height: undefined,
    aspectRatio: 2,
    marginTop: 10,
  },
  sm_text: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 10,
  },
  sm_sign: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  reserved: {
    alignItems: "center",
    marginTop: 20,
  },
  city: {
    fontSize: 10,
    fontWeight: "400",
    marginBottom: 2,
  },
  inputContainer: {
    marginBottom: 20,
    paddingHorizontal: 1
  },
});
