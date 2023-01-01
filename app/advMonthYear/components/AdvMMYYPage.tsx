import React, { useState, useEffect } from "react";
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

    const increaseMonth = () => {
        if (month < 12) {

            setMonth(month + 1)

        }




    }

    const decreaseMonth = () => {
        if (month > 1) {

            setMonth(month - 1)

        }
    }

    const increaseYear = () => {
        if (year < 2022) {
            setYear(year + 1)

        }
    }

    const decreaseYear = () => {
        if (year > 1990) {
            setYear(year - 1)

        }
    }


    return (
        <SafeAreaView>
            <Text>Basic Month Year</Text>

            <Text>Month</Text>
            <AdvButtonComp buttonTitle={"Dec. Month"} buttonEvent={decreaseMonth} />
            <AdvMonthCounter monthValue={month} />
            <AdvButtonComp buttonTitle={"Inc. Month"} buttonEvent={increaseMonth} />


            <Text>Year</Text>
            <AdvButtonComp buttonTitle={"Dec. Year"} buttonEvent={decreaseYear} />
            <AdvYearCounter yearValue={year} />
            <AdvButtonComp buttonTitle={"Inc. Year"} buttonEvent={increaseYear} />

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

export default AdvMMYYPage;