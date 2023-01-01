import React, {useEffect} from "react";
import { View, Text } from "react-native";


interface PropsMonthYear {
    monthValue: number,
    yearValue : number
}

const MonthYearCounter = (props: PropsMonthYear) => {

    useEffect(()=>{
        console.log("MonthYear Init +++")
        return(()=>{
            console.log("MonthYear DeInit ---")
        })
    });

    return(
        <View>
            <Text>{props.monthValue} / {props.yearValue}</Text>
        </View>
    );
}

export default MonthYearCounter;