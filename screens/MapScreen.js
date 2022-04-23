import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from 'twrnc';
//import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View>
      <Text>here is the map stuff...</Text>

      <View style={tw`h-1/2`}></View>
      <map/>

      <view style={tw`h-1/2`}></view>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});