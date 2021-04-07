import {StyleSheet} from 'react-native';
import {fonts} from '../../../constants/fonts';
import {metrics} from '../../../constants/metrics';
import {calcHeight, calcWidth} from '../../../utils/normalize';

export default StyleSheet.create({
  articleContainer: {
    width: metrics.content_width,
    marginVertical: metrics.v_spacing_s,
    flexDirection: 'row',
  },
  descriptionContainer: {
    width: calcWidth(250),
    marginStart: metrics.v_spacing_s,
  },
  articleImage: {
    width: calcHeight(70),
    height: calcHeight(70),
  },
  text: {
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  title: {
    ...fonts.SpaceMono.bold,
  },
  desc: {
    ...fonts.SpaceMono.regular,
  },
});
