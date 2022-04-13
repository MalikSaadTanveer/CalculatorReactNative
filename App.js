//import liraries
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonComponent from './src/components/ButtonComponent';
// create a component

let first = '', second = '', operator = '';
const buttonArray = [7, 8, 9, '/', 4, 5, 6, 'x', 1, 2, 3, '-', 0, '.', '=', '+',];
const App = () => {
  const [calculation, setCalculation] = useState('');
  const [aboveCalculations, setAboveCalculations] = useState('');
  const [on, setOn] = useState(false);

  const handleOnOff = () => {
    setOn(!on);
    setCalculation('');
    setAboveCalculations('');
    first = second = operator = ''
  };
  const handleCalculation = item => {
    if (!on) {
      setCalculation('');
      return;
    }

    if (typeof (item) === 'string' && item != '.') {
      // if(calculation || first)
      doOperations(item)
    }
    else if (calculation.length == 15) {
      ToastAndroid.show("You can enter upto 15 digits", ToastAndroid.SHORT)

    }
    else if (typeof (item) == "number" || (item === '.' && !calculation.includes('.'))) {
      if (!(calculation.length == 0 && item == 0)) {
        setCalculation(pre => pre + item);
        if (first) {
          setAboveCalculations(pre => pre + item);
          second = second + item
        }
      }
    }
  };

  const doOperations = (item) => {
    setCalculation('')
    if (!first) {
      first = calculation
    }
    if (!operator) {
      if (item === 'x')
        operator = '*'
      else
        operator = item

    }

    if (second) {
      const result = eval(`${first} ${operator} ${second}`)
      first = result.toString().includes('.') ? first = result.toFixed(4) : result
    }

    if(operator === '+' && first) {
      operator = item
      setAboveCalculations(`${first} ${operator} `)
    }
    else if (operator === '-' && first) {
      operator = item
      setAboveCalculations(`${first} ${operator} `)
    }
    else if (operator === '*' && first) {
      operator = item
      setAboveCalculations(`${first} ${operator} `)
    }
    else if (operator === '/' && first) {
      operator = item
      setAboveCalculations(`${first} ${operator} `)
    }
    if (item === '=') {
      setAboveCalculations('')
      setCalculation(first.toString())
      operator = ''
      first = ""
    }

    if (operator === 'x')
      operator = '*'
    second = ''
    // console.warn({operator,first})
  }


  const handleCancel = () => {
    if (calculation) {
      setCalculation(pre => pre.substring(0, pre.length - 1));
    }
    if (aboveCalculations && calculation) {
      setAboveCalculations(pre => pre.substring(0, pre.length - 1));
      second = second.substring(0, second.length - 1);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4c669f" barStyle="light-content" />
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container1}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Calculator</Text>
        </View>

        <View style={{ flex: 1 }}>
          <View style={styles.top}>
            <Text style={styles.aboveCalculationBox}>{aboveCalculations}</Text>
            <Text style={styles.calculationBox}>{calculation}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 3,
            justifyContent: 'space-between',
            paddingVertical: 20,
          }}>
          <View style={{ alignItems: 'flex-end', flexDirection: 'row-reverse' }}>
            <Pressable
              onPress={handleOnOff}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? 'rgba(255, 255, 255,0.5)'
                    : 'rgba(255, 255, 255,0.3)',
                },
                styles.onOffContainer,
              ]}>
              <Text style={[styles.onOffText, { color: on ? 'white' : 'black' }]}>
                ON / OFF
              </Text>
            </Pressable>
          </View>

          <Pressable
            onPress={handleCancel}
            onLongPress={() => setCalculation('')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? 'rgba(255,0,0,0.5)'
                  : 'rgba(255,0,0,0.4)',
              },
              styles.crossButton,
            ]}>
            <Text style={styles.crossButtonText}>X</Text>
          </Pressable>

          <View style={styles.buttonsContainer}>
            {buttonArray.map((item, i) => (
              <ButtonComponent
                text={item}
                key={i}
                onPress={() => handleCalculation(item)}
                isOn={on}
              />
            ))}
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    paddingHorizontal: 12,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  top: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    paddingHorizontal: 12

  },
  aboveCalculationBox: {
    flex: 1,
    fontSize: 20,
    textAlignVertical: 'center',
    width: '100%',
    color: 'lightgrey',
  },
  calculationBox: {
    flex: 1,
    // backgroundColor: 'green',
    width: '100%',
    fontSize: 32,
    color: 'white',
    textAlign: 'right',
    textAlignVertical: 'bottom',
  },
  onOffContainer: {
    paddingVertical: 12,
    paddingVertical: 6,
    paddingHorizontal: 20,
    margin: 12,
    borderRadius: 4,
  },
  onOffText: {
    // color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  crossButton: {
    // backgroundColor:'rgba(0,0,0,0.3)',
    alignSelf: 'flex-end',
    marginRight: 16,
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    borderTopLeftRadius:50,
  },
  crossButtonText: {
    fontSize: 18,
    color: 'white',
  },
  buttonsContainer: {
    // backgroundColor:'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default App;
