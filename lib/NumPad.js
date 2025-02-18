"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumPad = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_svg_1 = require("react-native-svg");
var DeleteIcon = function () { return (<react_native_svg_1.Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <react_native_svg_1.Path d="M21 4H8L1 12L8 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    <react_native_svg_1.Path d="M18 9L12 15M12 9L18 15" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </react_native_svg_1.Svg>); };
var NumPad = function (_a) {
    var onPress = _a.onPress, _b = _a.decimalSeparator, decimalSeparator = _b === void 0 ? '.' : _b, buttonStyle = _a.buttonStyle, buttonTextStyle = _a.buttonTextStyle, containerStyle = _a.containerStyle;
    var buttons = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        decimalSeparator, '0', 'delete'
    ];
    return (<react_native_1.View style={[styles.container, containerStyle]}>
      {buttons.map(function (button, index) { return (<react_native_1.TouchableOpacity key={index} style={[styles.button, buttonStyle]} onPress={function () { return onPress(button); }} activeOpacity={0.7}>
          {button === 'delete' ? (<DeleteIcon />) : (<react_native_1.Text style={[styles.buttonText, buttonTextStyle]}>
              {button}
            </react_native_1.Text>)}
        </react_native_1.TouchableOpacity>); })}
    </react_native_1.View>);
};
exports.NumPad = NumPad;
var styles = react_native_1.StyleSheet.create({
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
