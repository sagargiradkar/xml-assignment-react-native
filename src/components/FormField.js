// FormField.js
import React from 'react';
import { View, Text } from 'react-native';
import TextField from './TextField';
import DateTimeField from './DateTimeField';
import RadioField from './RadioField';
import DrawingField from './DrawingField';

const FormField = ({ type, label, options }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text>{label}</Text>
      {type === 'text' && <TextField />}
      {type === 'datetime' && <DateTimeField />}
      {type === 'radio' && <RadioField options={options.split(',')} />}
      {type === 'drawing' && <DrawingField />}
    </View>
  );
};

export default FormField;
