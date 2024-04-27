import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const NumberInput = props => {
  const [numberInputValue, setNumberInputValue] = useState('');

  const handleNumberInputChange = (text) => {
    // Remove non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, '');
    setNumberInputValue(numericValue);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} pointerEvents={props.display}>
      <TextInput
        style={{ height: 40, width: "85%", borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10, marginTop: 20, borderRadius: 5, }}
        placeholder="Enter a number"
        keyboardType="numeric" // Specify numeric keyboard
        onChangeText={handleNumberInputChange}
        value={numberInputValue}
      />
    </View>
  );
};

export default NumberInput;
