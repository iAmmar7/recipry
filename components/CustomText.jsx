import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../constants/colors';

const CustomText = (props) => {
  const { children, style, bold, title, ...otherProps } = props;

  return (
    <Text style={{ ...styles.text, ...(bold && styles.bold), ...(title && styles.title), ...style }} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
  bold: {
    fontFamily: 'open-sans-bold',
  },
  title: {
    fontSize: 20,
  },
});

export default CustomText;
