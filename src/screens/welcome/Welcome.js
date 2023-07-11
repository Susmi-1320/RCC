import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';

export const Welcome = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Welcom To RCC Hotels</Text>
      </View>
      <Button
        title="Go to RCC Home"
        onPress={() => {
          navigation.push('TabNavigation');
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
