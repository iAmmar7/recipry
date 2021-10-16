import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback, Platform, Dimensions } from 'react-native';

import colors from '../constants/colors';
import CustomText from './CustomText';

const TouchComponent = Platform.select({
  ios: () => TouchableOpacity,
  android: () => (Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity),
})();

const CategoryTile = (props) => {
  const { title, color, imageUrl, onSelect } = props;

  return (
    <View style={styles.wrapper}>
      <TouchComponent style={styles.container} onPress={onSelect}>
        <View style={{ ...styles.item, backgroundColor: color }}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.titleContainer}>
            <CustomText numberOfLines={2} bold title style={styles.title}>
              {title}
            </CustomText>
          </View>
        </View>
      </TouchComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: '3%',
    height: 150,
  },
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    padding: '6%',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    textAlign: 'right',
  },
});

export default CategoryTile;
