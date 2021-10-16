import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const TouchComponent = Platform.select({
  ios: () => TouchableOpacity,
  android: () => (Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity),
})();

function CustomTouch(props) {
  const { children, ...otherProps } = props;
  return <TouchComponent {...otherProps}>{children}</TouchComponent>;
}

export default CustomTouch;
