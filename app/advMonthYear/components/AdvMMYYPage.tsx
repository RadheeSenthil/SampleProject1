import React, { useState, useEffect, useCallback } from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";


import AdvMonthCounter from "./AdvMonthCounter";
import AdvYearCounter from "./AdvYearCounter";
import AdvMonthYearCounter from "./AdvMonthYearCounter";
import AdvButtonComp from "./AdvButtonComp";

const AdvMMYYPage = () => {

    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(2000)

    useEffect(() => {
        console.log("Advanced Page Init +++")
        return (() => {
            console.log("Advanced Page De-Init ---")
        })
    });

    const increaseMonthCB = useCallback(()=>{
        if (month < 12) {
            setMonth(month + 1)
        }
    },[month])

    // const increaseMonth = () => {
    //     if (month < 12) {

    //         setMonth(month + 1)

    //     }
    // }

    const decreaseMonthCB = useCallback(()=>{
        if (month > 1) {

            setMonth(month - 1)

        }
    },[month])

    // const decreaseMonth = () => {
    //     if (month > 1) {

    //         setMonth(month - 1)

    //     }
    // }

    const increaseYearCB = useCallback(()=>{
        if (year < 2022) {
            setYear(year + 1)

        }
    },[year])


    // const increaseYear = () => {
    //     if (year < 2022) {
    //         setYear(year + 1)

    //     }
    // }

    const decreaseYearCB = useCallback(()=>{if (year > 1990) {
        setYear(year - 1)

    }},[year])


    // const decreaseYear = () => {
    //     if (year > 1990) {
    //         setYear(year - 1)

    //     }
    // }


    return (
        <SafeAreaView>
            <Text>Basic Month Year</Text>

            <Text>Month</Text>
            <AdvButtonComp buttonTitle={"Dec. Month"} buttonEvent={decreaseMonthCB} />
            <AdvMonthCounter monthValue={month} />
            <AdvButtonComp buttonTitle={"Inc. Month"} buttonEvent={increaseMonthCB} />


            <Text>Year</Text>
            <AdvButtonComp buttonTitle={"Dec. Year"} buttonEvent={decreaseYearCB} />
            <AdvYearCounter yearValue={year} />
            <AdvButtonComp buttonTitle={"Inc. Year"} buttonEvent={increaseYearCB} />

            <View style={styles.resultView} >
                <Text>OutPut</Text>
                <AdvMonthYearCounter monthValue={month} yearValue={year} />
            </View>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    resultView: {
        margin: 10,
        padding: 10,
    }
});

export default React.memo(AdvMMYYPage) ;