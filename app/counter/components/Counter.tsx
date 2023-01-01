import React, { useState, useEffect} from "react";
import { View, SafeAreaView, Text, StyleSheet, Button } from "react-native";

import CountDisplay from "./CountDisplay";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log('Counter.js');
    });
  
    useEffect(() => {
      console.log('Init Counter ');
      return () => {
        console.log('DeInit Counter Called');
      };
    });
  
    function increaseCount() {
      setCount(count + 1);
    }
    function decreaseCount() {
      setCount(count - 1);
    }
    return (
      <SafeAreaView>
        <Button onPress={increaseCount} title="+" />
        <CountDisplay dispCount={count} />
        <Button onPress={decreaseCount} title="-" />
      </SafeAreaView>
    );
}

export default Counter;