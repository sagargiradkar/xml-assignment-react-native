import { Image, StyleSheet, View, Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { parseXml } from '../../src/utils/xmlParser';
import FormField from '../../src/components/FormField';

export default function HomeScreen() {
  const [xmlInput, setXmlInput] = useState('');
  const [formFields, setFormFields] = useState([]); // Initialize formFields as an empty array

  const renderFormFromFile = () => {
    // Simulate loading and parsing XML from file
    const xml = `<form><field type="text" label="Name" /><field type="datetime" label="Date of Birth" /><field type="radio" label="Gender" options="Male,Female,Other" /><field type="drawing" label="Signature" /></form>`;
    setFormFields(parseXml(xml));
  };

  const renderFormFromInput = () => {
    try {
      const parsedFields = parseXml(xmlInput);
      setFormFields(parsedFields);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.container}>
        <Text style={styles.title}>Form Renderer</Text>
        <View style={styles.buttonContainer}>
          <Button title="Render Form from XML File" onPress={renderFormFromFile} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Render Form from XML Input" onPress={renderFormFromInput} />
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={4}
            placeholder="Enter XML input"
            value={xmlInput}
            onChangeText={text => setXmlInput(text)}
          />
        </View>
        <View style={styles.formContainer}>
          {/* Check if formFields is not undefined before calling map */}
          {formFields && formFields.map((field, index) => (
            <FormField key={index} {...field} />
          ))}
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 8,
    width: '100%',
  },
  formContainer: {
    marginTop: 20,
    width: '100%',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
