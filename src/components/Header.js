import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../assets/global/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const Header = ({title, onBack}) => {
  return (
    <View style={[globalStyles.header]}>
      <MaterialIcons name="arrow-left" color={COLORS.orange} size={40} />
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
