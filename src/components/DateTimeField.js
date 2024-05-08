// DateTimeField.js
import React, { useState } from 'react';
import { DatePickerIOS } from 'react-native';

const DateTimeField = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePickerIOS
      mode="date"
      date={date}
      onDateChange={newDate => setDate(newDate)}
      style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 5 }}
    />
  );
};

export default DateTimeField;
