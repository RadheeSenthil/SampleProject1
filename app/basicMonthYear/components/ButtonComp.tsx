import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

interface PropsButton {
    buttonTitle: string,
    buttonEvent: any
}

const ButtonComp = (props: PropsButton) => {

    useEffect(() => {
        console.log(props.buttonTitle + "- Init +++")
        return (() => {
            console.log(props.buttonTitle + "- DeInit ---")
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

export default ButtonComp;