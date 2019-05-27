import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import homeStyle from '../home.style';
import EventFunction from '../../../types/eventFunction';


type MenuButtonProps = {
  onPress: EventFunction,
  title: string,
};

const MenuButton = ({ onPress, title }: MenuButtonProps) => (
  <TouchableOpacity
    style={homeStyle.menuButton}
    onPress={onPress}
  >
    <Text style={homeStyle.menuButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default MenuButton;
