import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Calculator({ navigation }) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const calculateSum = () => {
    const sum = parseFloat(input1) + parseFloat(input2);
    setResult(sum);
    addToHistory(`${input1} + ${input2} = ${sum}`);
  };

  const calculateSubstraction = () => {
    const substraction = parseFloat(input1) - parseFloat(input2);
    setResult(substraction);
    addToHistory(`${input1} - ${input2} = ${substraction}`);
  };

  const addToHistory = (calculation) => {
    setHistory([...history, { key: `${history.length}`, calculation }]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.input}
            placeholder='Enter first value'
            keyboardType='numeric'
            value={input1}
            onChangeText={setInput1}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter second value"
            keyboardType='numeric'
            value={input2}
            onChangeText={setInput2}
          />
          <View style={styles.buttonContainer}>
            <Button title='+' onPress={calculateSum} />
            <Button title='-' onPress={calculateSubstraction} />
          </View>
          {result !== null && (
            <Text style={styles.resultText}>Result: {result}</Text>
          )}
          <Button
            title="History"
            onPress={() => navigation.navigate('History', { history })}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  resultText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});