// RadioField.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RadioField = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View>
      {options.map(option => (
        <TouchableOpacity key={option} onPress={() => setSelectedOption(option)}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioField;
