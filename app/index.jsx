import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import background from "../assets/test12.png";
import dcho from "../assets/dcho.png";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.replace("/(auth)/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={background}
        style={styles.backgroundImage}
        resizeMode="cover"
        blurRadius={3}
      />
      <View style={styles.contentContainer}>
        <Image source={dcho} style={styles.dcho} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>HMIS</Text>
          <Text style={styles.subheading}>Mobile App</Text>
            {isLoading && (
            <ActivityIndicator 
              size="large" 
              color="#fff" 
              style={styles.loader}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  textContainer: {
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "900",
    letterSpacing: 1,
  },
  subheading: {
    fontSize: 30,
    color: "#e0e0e0",
    textTransform: "uppercase",
    fontWeight: "500",
    letterSpacing: 1,
  },
  dcho: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
});
