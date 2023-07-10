import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Map from '../components/Map';
import DetailsScreen from '../screens/home/DetailsScreen';
import HomeScreen from '../screens/home/HomeScreen';
import COLORS from '../consts/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Welcome from '../screens/welcome/Welcome';
import Settings from '../screens/settings/Settings';
import Profile from '../screens/profile/Profile';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="home" component={HomeScreen} />
      <HomeStack.Screen name="details" component={DetailsScreen} />
      <HomeStack.Screen name="map" component={Map} />
    </HomeStack.Navigator>
  );
};
const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="homestacknavigation"
        component={HomeStackNavigation}
        options={{title: 'Home'}}
        tabBarIcon
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
      <Tab.Screen
        name="account"
        component={Settings}
        options={{title: 'Settings'}}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        {/* <Stack.Screen name="Map" component={Map} /> */}
      </Stack.Navigator>
      {/* <BottomNavigator /> */}
    </NavigationContainer>
  );
};

export default Navigation;
