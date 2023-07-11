import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/global/globalStyles';

const Settings = () => {
  return (
    <SafeAreaView style={[globalStyles.whiteBg]}>
      <View style={[globalStyles.header]}>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
