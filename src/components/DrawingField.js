// DrawingField.js
import React from 'react';
import { View, Text } from 'react-native';

const DrawingField = () => {
  return (
    <View style={{ borderWidth: 1, borderColor: 'gray', height: 100, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tap to draw</Text>
    </View>
  );
};

export default DrawingField;
