import React, {useEffect} from "react";
import { View, Text } from "react-native";


interface PropsMonthYearAdv {
    monthValue: number,
    yearValue : number
}

const AdvMonthYearCounter = (props: PropsMonthYearAdv) => {

    useEffect(()=>{
        console.log("Advanced MonthYear Init +++")
        return(()=>{
            console.log("Advanced MonthYear DeInit ---")
        })
    });

    return(
        <View>
            <Text>{props.monthValue} / {props.yearValue}</Text>
        </View>
    );
}

export default React.memo(AdvMonthYearCounter) ;