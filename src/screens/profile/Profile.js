import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyle from '../../assets/global/globalStyles';
import Header from '../../components/Header';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.whiteBg]}>
      <Header title='Profile'/>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
