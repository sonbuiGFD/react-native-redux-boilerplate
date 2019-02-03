import React from 'react';
import { StyleSheet, Text } from 'react-native';

const s = StyleSheet.create({
  regular: {
    fontFamily: 'Roboto-Regular',
  },
  bold: {
    fontFamily: 'Roboto-Medium',
  },
  light: {
    fontFamily: 'Roboto-Light',
  },
});

const TextRoboto = ({ style = {}, type, children }) => (
  <Text style={[style, s[type]]}>{children}</Text>
);

export default TextRoboto;

TextRoboto.defaultProps = {
  type: 'regular',
};
