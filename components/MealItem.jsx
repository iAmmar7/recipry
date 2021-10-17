import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import colors from '../constants/colors';

import CustomText from './CustomText';
import CustomTouch from './CustomTouch';

const MealItem = (props) => {
  const { title, imageUrl, duration, complexity, affordability, onSelectMeal, bgColor } = props;
  return (
    <View style={{ ...styles.mealItem, backgroundColor: bgColor }}>
      <CustomTouch onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <CustomText style={styles.title} bold title numberOfLines={1}>
                  {title}
                </CustomText>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <CustomText white>{duration}m</CustomText>
            <CustomText white>{complexity.toUpperCase()}</CustomText>
            <CustomText white>{affordability.toUpperCase()}</CustomText>
          </View>
        </View>
      </CustomTouch>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    // backgroundColor: colors.darkGrey,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: colors.transaparentBlack,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default MealItem;
