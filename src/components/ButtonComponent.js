//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';

// create a component
const ButtonComponent = ({text,onPress,isOn}) => {
    return (
        <Pressable onPress={onPress} disabled={!isOn}
            style={({pressed}) => [{backgroundColor:pressed?'rgba(255, 255, 255,0.5)':'rgba(255, 255, 255,0.3)'},
            styles.container,
            ]}>
            <Text style={[styles.containerText,
            {color:typeof(text)==='string'?'#f79256':'white',
            fontWeight:typeof(text)==='string'?'bold':'normal'},
            !isOn && {color:'black'}]}>
            {text}</Text>
        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
        width:80,
        height:80,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 50,
        margin:'1%',
    },
    containerText:{
        color:'white',
        fontSize:24,
    }
});

//make this component available to the app
export default ButtonComponent;
