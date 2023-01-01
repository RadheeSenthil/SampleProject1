import React, {useEffect} from "react";
import { View, Text } from "react-native";


interface PropsYearAdv {
    yearValue : number
}

const AdvYearCounter = (props: PropsYearAdv) => {

    useEffect(()=>{
        console.log("Advanced Year Counter - Init +++")
        return(()=>{
            console.log("Advanced Year Counter - DeInit ---")
        })
    });

    return(
        <View>
            <Text>Display Year : {props.yearValue}</Text>
        </View>
    );
}

export default  React.memo(AdvYearCounter) ;