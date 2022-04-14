import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import Navigatecard from "../components/NavigateCard";
import RideOptionCard from "../components/RideOptionCard";
import MapView from "react-native-map";
import { createStackNavigator } from "@react-navigation/stack";


const MapScreen = () => {

  const Stack = createStackNavigator();
  return (
    <View>

      <view style={tw`h-1/2`}>
        <Map />

      </view>


      <view style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
          name="NavigatorCard"
          component={NavigateCard}
          options={{
            headerShown: false,
          }}
          /> 
          <Stack.Screen
          name="RideOptionCard"
          component={RideOptionCard}
          options={{
            headerShown: false,
          }}
          
          />

        </Stack.Navigator>

      </view>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
