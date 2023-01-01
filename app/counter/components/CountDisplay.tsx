import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface PropCountDisp{
    dispCount : number
}

const CountDisplay = (props : PropCountDisp) => {

    useEffect( ()=>{
        console.log("CounterDisplay")
        return(()=>{
            console.log("CountDisplay DeInit")
        })
    });
  
  return(
     <View>

    
     <Text style={{margin: 10, padding: 5, fontSize: 20, fontWeight: 'bold', color: 'coral'}}>
     {props.dispCount}
     </Text>
      
  
  </View>
  );
};

export default CountDisplay;
