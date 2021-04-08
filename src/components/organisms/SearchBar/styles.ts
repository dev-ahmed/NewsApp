import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {calcHeight, calcWidth} from '../../../utils/normalize';

export default StyleSheet.create({
  container: {
    height: calcHeight(40),
    backgroundColor: colors.light,
    borderWidth: 1,
    borderRadius: calcWidth(15),
    borderColor: colors.light_grey,
    justifyContent: 'center',
    paddingStart: calcWidth(15),
  },
});
