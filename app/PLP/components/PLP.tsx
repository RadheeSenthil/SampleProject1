import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from "react-native";

const PLP = ({navigation}) => {

    function gotoPDP() {
        navigation.navigate("PDP")
    }

    return(
        <SafeAreaView>
            <Text>PLP Screen</Text>

            <TouchableOpacity onPress={gotoPDP} >
                <Text style={{fontWeight: 'bold', fontSize: 18}}>GOTO PDP</Text>
                </TouchableOpacity>

        </SafeAreaView>
    );
}

export default PLP;