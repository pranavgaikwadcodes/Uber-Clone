import React from "react";
import { Stylesheet, Text, View, SafeareaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocompelete } from "react-native-google-places-autocompelete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const Navigatecard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return(
    <SafeareaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-5 text-xl`}>Welcome To Uber</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocompelete 
                placeholder="Where to go?"
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={"search"}
                minLenght={2}
                onPress={(data,details = null) => {
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description
                    }));


                }}
                enablePowerByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en", 
                }}
                nearbyPlacesAPI="GoogleplacesSearch"
                debounce={400}
                
                />
            </View>

        </View>

    </SafeareaView>
    );
};

export default NavigateCard;
const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "White",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontsize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});

