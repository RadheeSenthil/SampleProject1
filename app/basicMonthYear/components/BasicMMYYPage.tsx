import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";


import MonthCounter from "./MonthCounter";
import YearCounter from "./YearCounter";
import MonthYearCounter from "./MonthYearCounter";
import ButtonComp from "./ButtonComp";

const BasicMMYYPage = () => {

    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(2000)

    useEffect(()=>{
        console.log("Basic Page Init +++")
        return(()=>{
            console.log("Basic Page De-Init ---")
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
            <ButtonComp buttonTitle={"Dec Month"} buttonEvent={decreaseMonth} />
            <MonthCounter monthValue={month} />
            <ButtonComp buttonTitle={"Inc Month"} buttonEvent={increaseMonth} />


            <Text>Year</Text>
            <ButtonComp buttonTitle={"Dec Year"} buttonEvent={decreaseYear} />
            <YearCounter yearValue={year} />
            <ButtonComp buttonTitle={"Inc Year"} buttonEvent={increaseYear} />

            <View style={styles.resultView} >
                <Text>OutPut</Text>
                <MonthYearCounter monthValue={month} yearValue={year} />
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

export default BasicMMYYPage;