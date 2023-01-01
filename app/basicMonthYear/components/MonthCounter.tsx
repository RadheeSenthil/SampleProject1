import React, {useEffect} from "react";
import { View, Text } from "react-native";

interface PropsMonth {
    monthValue : number
}

const MonthCounter = (props : PropsMonth) => {

    useEffect(()=>{
        console.log("Month Counter Init +++")
        return(()=>{
            console.log("Month Counter De-Init ---")
        })
    });

    return(
        <View>
            <Text>Display MOnth : {props.monthValue}</Text>
            
        </View>
    );
}

export default MonthCounter;