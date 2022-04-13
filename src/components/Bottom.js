//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import ButtonComponent from './ButtonComponent';

// create a component

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, '=','.', 0];
const operators = ['/','*','+','-'];
const Bottom = () => {
  return (
    <View style={styles.container}>
      
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 12,
  },
  onOffContainer: {
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255,0.3)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginVertical: 6,
    borderRadius: 4,
  },
  onOffText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  leftContainer: {
    width: '75%',
    flex: 1,
    backgroundColor:'red',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    // paddingTop: 10,
    position:'absolute',
    bottom:20
  },
  rightContainer:{
    width:'25%',
    position:'absolute',
    backgroundColor:'green',
    bottom:20,
    justifyContent: 'center',
    right:30
  }
});

//make this component available to the app
export default Bottom;
