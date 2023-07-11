import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../consts/colors';

const Button = ({title, onPress}) => {
  return (
    <View style={{position: 'absolute', bottom: 30, alignSelf: 'center'}}>
      <Pressable style={styles.btn} onPress={onPress}>
        <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get('screen').width * 0.9,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 10,
  },
});
