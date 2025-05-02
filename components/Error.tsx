import React from 'react';
import { Text, StyleSheet } from 'react-native';

const FormError = ({ error }) => {
  if (!error) return null;
  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default FormError;
