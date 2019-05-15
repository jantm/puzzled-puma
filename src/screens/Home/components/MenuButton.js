import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import homeStyle from '../home.style';

const MenuButton = ({ onPress, title }) => (
  <TouchableOpacity
    style={homeStyle.menuButton}
    onPress={onPress}
  >
    <Text style={homeStyle.menuButtonText}>{title}</Text>
  </TouchableOpacity>
);

MenuButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuButton;
