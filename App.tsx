import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { NumPad } from './src/components/NumPad';

export default function App() {
  const [value, setValue] = useState<string>('');

  const handlePress = (digit: string) => {
    if (digit === 'delete') {
      setValue(prev => prev.slice(0, -1));
    } else {
      setValue(prev => prev + digit);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
     
      <NumPad
        onPress={handlePress}
        decimalSeparator=","
        buttonStyle={styles.customButton}
        buttonTextStyle={styles.customButtonText}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  display: {
    padding: 20,
    alignItems: 'flex-end',
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  displayText: {
    fontSize: 40,
    fontWeight: '300',
    color: '#212529',
  },
  customButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  customButtonText: {
    color: '#495057',
    fontWeight: '600',
  },
});
