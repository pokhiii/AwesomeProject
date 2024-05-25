import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Section = ({title, children}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
});

export default Section;
