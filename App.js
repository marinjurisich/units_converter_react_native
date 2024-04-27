import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,  Pressable, TextInput, Dimensions  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LengthConverterScreen  from './components/LengthConverterScreen'
import WeightConverterScreen  from "./components/WeightConverterScreen"

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Values Converter</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('LengthConverter')}>
          <Text style={styles.text}>Convert Length</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('WeightConverter')}>
          <Text style={styles.text}>Convert Weight</Text>
        </Pressable>
      </View>
    </View>
  );
};



Calculator = () => {

  console.log("KALKULATOR")
  console.log(this.state.inputValue);

  //return outputValue;
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LengthConverter" component={LengthConverterScreen} />
        <Stack.Screen name="WeightConverter" component={WeightConverterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    justifyContent: 'top',
    fontSize: 24,
    marginBottom: 30,
    marginTop: 15,
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
   buttonContainer: {
     flexDirection: 'column', // Arrange children horizontally
     justifyContent: 'center', // Align children in the center horizontally
     maxWidth: "90%"
   },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#24292E',
  },
});
