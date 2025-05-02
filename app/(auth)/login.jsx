import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { authService } from "../../components/API/AuthService";
import logo from "../../assets/davao_logo.png";
import dcho from "../../assets/dcho.png";
import ThemedView from "../../components/ThemedView";
import InputField from "../../components/InputField";
import CustomButton from "../../components/Buttom";
import Error from "../../components/Error";
import React, { useState } from "react";

const LoginForm = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const submitLogin = async () => {
    try {
      const payload = {
        email: form.email.trim(),
        password: form.password,
      };
      const response = await authService.login(payload);
      if (response) {
        console.log("Login successful:", response);
      }
    } catch (error) {
      setErrors({
        email: error.message,
        password: error.message
      });
    }
  };

  return (
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

      <View style={styles.inputContainer}>
        <InputField
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          style={{ width: 350, paddingHorizontal: 12 }}
          label="Email address"
        />
        <Error error={errors.email} />
      </View>

      <View style={styles.inputContainer}>
        <InputField
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
          secureTextEntry={true}
          label="Password"
          style={{ width: 350, paddingHorizontal: 12 }}
        />
        <Error  error={errors.password} />
      </View>

      <View>
        <CustomButton
          title="Sign in"
          style={{ width: 330, marginTop: 20 }}
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
    marginBottom: 10,
    //  paddingHorizontal: 1
  },
});
