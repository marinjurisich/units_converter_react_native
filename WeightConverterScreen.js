import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,  Pressable, TextInput, Dimensions  } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const WeightConverterScreen = () => {

const [inputValue, setInputValue] = React.useState('');
const [inputUnit, setInputUnit] = useState(null);
const [outputValue, setOutputValue] = useState(null);
const [outputUnit, setOutputUnit] = useState(null);
const [reverse, setReverse] = useState(false);

calculate = () => {

  let calculatedOutputValue = inputValue * inputUnit * outputUnit;
  console.log("calculatedOutputValue", calculatedOutputValue)
  console.log("inV", inputValue, "inU", inputUnit, "outU", outputUnit);
  
  if (reverse === true) {
    let reversedValue = 1 / calculatedOutputValue;
    console.log(reversedValue);
    setOutputValue(reversedValue.toFixed(2).toString());
  } else {
    setOutputValue(calculatedOutputValue.toFixed(2).toString());
  }

}

switchUnits = () => {
  console.log("REVERSE")
  if(reverse) {
    setReverse(false);
  } else {
   setReverse(true);
  }
  console.log(reverse);


}

const metric = [
{ label: 'Kilograms', value: '1' },
{ label: 'Decagrams', value: '0.01' },
{ label: 'Tons', value: '1000' },
{ label: 'Grams', value: '0.001' },
];

const imperial = [
{ label: 'Pounds', value: '2.20462262' },
{ label: 'Ounces', value: '35.2739619' },
{ label: 'Stone', value: '0.157473044' },
];


return (
<View style={styles.container}>
    <Text style={styles.converterText}>Convert</Text>
    <View style={[styles.dropdownContainer, reverse ? styles.none : ""]}>
      <TextInput 
        onChangeText={setInputValue}
        style={styles.input}
        value={inputValue}
      />
      <Dropdown 
        style={styles.dropdown}
        data={metric}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select unit"
        searchPlaceholder="Search..."
        value={inputUnit}
        onChange={item=> {
          console.log(item)
          setInputUnit(item.value);
        }}
      />
    </View>
    {/* Reversed conversion */}
    <View style={[styles.dropdownContainer, reverse ? "" : styles.none]}>
      <TextInput 
        onChangeText={setInputValue}
        style={styles.input}
        value={inputValue} 
      />
      <Dropdown 
        style={styles.dropdown}
        data={imperial}
        maxHeight={300}
        labelField="label"
        valueField="value"
        value={outputUnit}
        placeholder="Select unit"
        onChange={item=> {
          setOutputUnit(item.value);
        }}
      />
    </View>
    {/* CONVERT TO */}
    <Text style={styles.converterText}>To</Text>
    <View style={[styles.dropdownContainer, reverse ? styles.none : ""]}>
      <TextInput 
        style={[styles.input, styles.disabled]} 
        value={outputValue}
        underlineColorAndroid='transparent' 
        editable={false} 
        selectTextOnFocus={false} 
        disabled 
      />
      <Dropdown 
        style={styles.dropdown}
        data={imperial}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select unit"
        value={outputUnit}
        onChange={item=> {
          setOutputUnit(item.value);
        }}
      />
    </View>
    {/* Reversed conversion */}
    <View style={[styles.dropdownContainer, reverse ? "" : styles.none]}>
      <TextInput 
        style={[styles.input, styles.disabled]} 
        value={outputValue}
        underlineColorAndroid='transparent' 
        editable={false} 
        selectTextOnFocus={false} 
        disabled 
      />
      <Dropdown 
        style={styles.dropdown}
        data={metric}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select unit"
        searchPlaceholder="Search..."
        value={inputUnit}
        onChange={item=> {
          console.log(item)
          setInputUnit(item.value);
        }}
      />
    </View>

    <Pressable style={styles.button} onPress={()=> calculate()}>
        <Text style={styles.text}>Calculate</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={()=> switchUnits()}>
        <Text style={styles.text}>Switch Units</Text>
    </Pressable>
</View>

);
};

export default WeightConverterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'top',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 64,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: '#FAFBFC',
      borderColor: 'rgba(27, 31, 35, 0.15)',
      borderWidth: 1,
      width: "90%",
      marginHorizontal: 50,
      marginBottom: 10
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#24292E',
    },
    dropdown: {
      width: '45%',
    },
    dropdownContainer: {
      flexDirection: "row",
      width: '95%',
      marginTop: 5,
      borderBottomColor: "lightgray",
      borderBottomWidth: 1,
      marginBottom: 15,
    },
    converterText: {
      width: "100%",
      marginTop: 20,
      textAlign: "center",
    },
    input: {
      width: "45%",
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
      marginTop: 20,
      borderRadius: 5,
      marginRight: 15,
      color: "black",
    },
    disabled: {
      backgroundColor: '#f2f2f2',
    },
    none: {
      display: "none"
    }
});