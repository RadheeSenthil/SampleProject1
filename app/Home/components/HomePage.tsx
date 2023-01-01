import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";

import NavButton from "../../common/components/NavButton";
import { NavRoutes } from "../../common/constants";

const HomePage = ({navigation}) => {

        function gotoPLP() {
            navigation.navigate(NavRoutes.PLP_NAME)
        }

    return(
        <SafeAreaView>
            <Text>Home Page</Text>

            <TouchableOpacity onPress={gotoPLP} >
                <NavButton title="GOTO PLP"/>
                </TouchableOpacity>

        </SafeAreaView>
    );
}

export default HomePage;