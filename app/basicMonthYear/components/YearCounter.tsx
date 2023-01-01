import React, {useEffect} from "react";
import { View, Text } from "react-native";


interface PropsYear {
    yearValue : number
}

const YearCounter = (props: PropsYear) => {

    useEffect(()=>{
        console.log("YearCounter - Init +++")
        return(()=>{
            console.log("Year Counter - DeInit ---")
        })
    });

    return(
        <View>
            <Text>Display Year : {props.yearValue}</Text>
        </View>
    );
}

export default YearCounter;