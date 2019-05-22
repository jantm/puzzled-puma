import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  patternInputContainer: {
    width: wp('80%'),
    height: wp('80%'),
  },
  patternInput: {
    width: wp('100%'),
    aspectRatio: 1,
  },
});
