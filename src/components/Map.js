import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyles from '../assets/global/globalStyles';
import MapView, {Marker} from 'react-native-maps';
import Header from './Header';
const Map = () => {
  return (
    <SafeAreaView style={[globalStyles.whiteBg]}>
      <Header />
      <MapView
        style={{
          flex: 1,
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
    </SafeAreaView>
  );
};

export default Map;
