import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from "react-native";

import NavButton from "../../common/components/NavButton";

const PLP = ({navigation}) => {

    function gotoPDP() {
        navigation.navigate("PDP")
    }

    return(
        <SafeAreaView>
            <Text>PLP Screen</Text>

            <TouchableOpacity onPress={gotoPDP} >
                <NavButton title="GOTO PDP"/>
                </TouchableOpacity>

        </SafeAreaView>
    );
}

export default PLP;