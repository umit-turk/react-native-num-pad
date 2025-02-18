import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface NumPadProps {
    onPress: (value: string) => void;
    decimalSeparator?: '.' | ',';
    buttonStyle?: ViewStyle;
    buttonTextStyle?: TextStyle;
    containerStyle?: ViewStyle;
}
export declare const NumPad: React.FC<NumPadProps>;
