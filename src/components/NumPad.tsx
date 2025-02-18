import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export interface NumPadProps {
  onPress: (value: string) => void;
  decimalSeparator?: '.' | ',';
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const DeleteIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4Z"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 9L12 15M12 9L18 15"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const NumPad: React.FC<NumPadProps> = ({
  onPress,
  decimalSeparator = '.',
  buttonStyle,
  buttonTextStyle,
  containerStyle,
}) => {
  const buttons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    decimalSeparator, '0', 'delete'
  ];

  return (
    <View style={[styles.container, containerStyle]}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, buttonStyle]}
          onPress={() => onPress(button)}
          activeOpacity={0.7}
        >
          {button === 'delete' ? (
            <DeleteIcon />
          ) : (
            <Text style={[styles.buttonText, buttonTextStyle]}>
              {button}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    padding: 10,
    justifyContent: 'center',
  },
  button: {
    width: '30%',
    aspectRatio: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: '1.5%',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#333',
  },
}); 