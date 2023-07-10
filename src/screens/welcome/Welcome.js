import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcom To RCC Hotels</Text>
      <Button
        title="Go to RCC Home"
        onPress={() => {
          navigation.push('TabNavigation');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
