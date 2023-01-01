import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";

import NavButton from "../../common/components/NavButton";
import { NavRoutes } from "../../common/constants";

const HomePage = ({ navigation }) => {

    function gotoPLP() {
        navigation.navigate(NavRoutes.PLP_NAME)
    }

    function gotoCounter() {
        navigation.navigate(NavRoutes.COUNTER_NAME)
    }

    function gotoBasicMMYY() {
        navigation.navigate(NavRoutes.BASICMMYY_NAME)
    }

    function gotoAdvancedMMYY() {
        navigation.navigate(NavRoutes.ADVMMYY_NAME)
    }


    return (
        <SafeAreaView>
            <Text>Home Page</Text>

            <TouchableOpacity onPress={gotoPLP} >
                <NavButton title="GOTO PLP" />
            </TouchableOpacity>


            <TouchableOpacity onPress={gotoCounter} >
                <NavButton title="GOTO COUNTERPAGE" />
            </TouchableOpacity>

            <TouchableOpacity onPress={gotoBasicMMYY} >
                <NavButton title="GOTO BASIC MONTHYEAR" />
            </TouchableOpacity>

            <TouchableOpacity onPress={gotoAdvancedMMYY} >
                <NavButton title="GOTO ADV. MONTHYEAR" />
            </TouchableOpacity>


        </SafeAreaView>
    );
}

export default HomePage;