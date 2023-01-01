import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomePage = ({navigation}) => {

        function gotoPLP() {
            navigation.navigate("PLP")
        }

    return(
        <SafeAreaView>
            <Text>Home Page</Text>

            <TouchableOpacity onPress={gotoPLP} >
                <Text style={{fontWeight: 'bold', fontSize: 18}}>GOTO PLP</Text>
                </TouchableOpacity>

        </SafeAreaView>
    );
}

export default HomePage;