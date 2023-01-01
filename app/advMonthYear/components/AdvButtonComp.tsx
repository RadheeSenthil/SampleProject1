import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

interface PropsButtonAdv {
    buttonTitle: string,
    buttonEvent: any
}

const AdvButtonComp = (props: PropsButtonAdv) => {

    useEffect(() => {
        console.log("Button - " + props.buttonTitle + "- Adv Init +++")
        return (() => {
            console.log("Button - " + props.buttonTitle + "- Adv DeInit ---")
        })
    });

    return (
        <View>
            <TouchableOpacity onPress={props.buttonEvent}>
                <Text style={styles.buttonStyle}>{props.buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 10,
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'steelblue',
        textAlign: 'center'
    }
})

export default React.memo(AdvButtonComp) ;