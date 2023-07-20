import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../assets/global/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, onBack}) => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[globalStyles.header]}>
      <Pressable onPress={onBack ? onBack : onPressBack}>
        <MaterialIcons name="arrow-left" color={COLORS.orange} size={40} />
      </Pressable>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
