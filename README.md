# React Native NumPad

A highly customizable numeric keypad component for React Native applications. This component provides a clean and modern interface for numeric input with support for both decimal point and comma separators.

## Features

- 🎨 Fully customizable styling
- 🔢 Support for both decimal point (.) and comma (,) separators
- 📱 Responsive design
- 🎯 Easy to integrate
- 💪 Written in TypeScript
- ⚡ Lightweight and performant

  ![Image](https://github.com/user-attachments/assets/924eaae5-5a17-425a-bb04-29d9ae18fb2d)

## Installation

```bash
npm install @umit-turk/react-native-num-pad
# or
yarn add @umit-turk/react-native-num-pad
```

### Dependencies

This package requires `react-native-svg` as a peer dependency. If you haven't already installed it:

```bash
npm install react-native-svg
# or
yarn add react-native-svg
```

## Usage

```jsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NumPad } from '@umit-turk/react-native-num-pad';

const Example = () => {
  const [value, setValue] = useState('');

  const handlePress = (digit: string) => {
    if (digit === 'delete') {
      setValue(prev => prev.slice(0, -1));
    } else {
      setValue(prev => prev + digit);
    }
  };

  return (
    <View>
      <Text>{value}</Text>
      <NumPad
        onPress={handlePress}
        decimalSeparator=","  // Use '.' for decimal point
      />
    </View>
  );
};

export default Example;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onPress | (value: string) => void | Required | Callback function that receives the pressed digit or 'delete' |
| decimalSeparator | '.' \| ',' | '.' | Decimal separator character |
| buttonStyle | ViewStyle | undefined | Custom style for the number buttons |
| buttonTextStyle | TextStyle | undefined | Custom style for the button text |
| containerStyle | ViewStyle | undefined | Custom style for the container |

## Customization Examples

### Custom Button Styles

```jsx
<NumPad
  onPress={handlePress}
  buttonStyle={{
    backgroundColor: '#007AFF',
    borderRadius: 25,
  }}
  buttonTextStyle={{
    color: '#FFFFFF',
    fontSize: 28,
  }}
/>
```

### Custom Layout

```jsx
<NumPad
  onPress={handlePress}
  containerStyle={{
    padding: 20,
    backgroundColor: '#F0F0F0',
  }}
/>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Ümit Yaşar Türk]
