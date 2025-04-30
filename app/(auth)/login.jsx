import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../../assets/davao_logo.png";
import dcho from "../../assets/dcho.png";
import InputField from "../../components/InputField";
import CustomButton from "../../components/Buttom";
import React from "react";

const LoginForm = () => {

  const Submit = () => {
    console.log("Submit");
  }

  return (
    <View style={styles.container}>
      <Image source={dcho} style={styles.dcho} />
      <Text style={styles.title}>Housing Management</Text>
      <Text style={styles.title}>Information System</Text>
      <Text style={styles.sm_text}>Davao City Housing Office</Text>
      <Text style={styles.sm_sign}>Sign in to your account</Text>
      <View>
        <InputField 
          style={{ width: 350, paddingHorizontal: 12 }}
          label="Email address"
        />
        <InputField
          secureTextEntry={true}
          label="Password"
          style={{ width: 350, paddingHorizontal: 12 }}
        />
      </View>
      <View>
        <CustomButton
          title="Sign in"
          style={{ width: 330, marginTop: 20 }}
          onPress={Submit}
        />
      </View>
      <View style={[styles.reserved, { marginTop: 10 }]}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.city}>© 2024 City Government of Davao City.</Text>
        <Text style={styles.city}>All rights reserved.</Text>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
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
  link: {
    fontSize: 16,
    color: "blue",
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  sm_text: {
    fontSize: 14,
    color: "black",
    fontWeight: "300",
    marginBottom: 10,
  },
  sm_sign: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  reserved: {
    alignItems: "center",
    marginTop: 20,
  },
  city: {
    fontSize: 10,
    color: "gray",
    fontWeight: "400",
    marginBottom: 2,
  },
});
