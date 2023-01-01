import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NavButton = (props) => {
    return(
        <View>
            <Text style={styles.buttonStyle}>
                {props.title}
            </Text>
        </View>
    );
}

const styles=StyleSheet.create({
    buttonStyle: {
        margin: 10,
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'coral',
        textAlign: 'center',
    }
})

export default NavButton;