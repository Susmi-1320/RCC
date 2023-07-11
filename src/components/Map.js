import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyles from '../assets/global/globalStyles';
const Map = () => {
  return (
    <SafeAreaView style={[globalStyles.whiteBg]}>
      <View style={[globalStyles.header]}>
        <Text>Map</Text>
      </View>
    </SafeAreaView>
  );
};

export default Map;
