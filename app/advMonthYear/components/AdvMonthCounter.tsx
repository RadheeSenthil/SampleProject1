import React, {useEffect} from "react";
import { View, Text } from "react-native";

interface PropsMonthAdv {
    monthValue : number
}

const AdvMonthCounter = (props : PropsMonthAdv) => {

    useEffect(()=>{
        console.log("Advanced Month Counter Init +++")
        return(()=>{
            console.log("Advanced Month Counter De-Init ---")
        })
    });

    return(
        <View>
            <Text>Display MOnth : {props.monthValue}</Text>
            
        </View>
    );
}

export default AdvMonthCounter;