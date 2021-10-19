import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import colors from '../constants/colors';

const DrawerIcon = ({ navigation }) => {
  const isOpen = useDrawerStatus() === 'open';

  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <AntDesign name={isOpen ? 'menu-fold' : 'menu-unfold'} size={22} color={colors.white} />
    </TouchableOpacity>
  );
};

export default DrawerIcon;
