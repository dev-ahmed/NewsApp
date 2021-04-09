import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants/metrics';
import {calcHeight} from '../../../utils/normalize';

export default StyleSheet.create({
  headerImage: {
    alignSelf: 'center',
    width: metrics.content_width - metrics.v_spacing_xl,
    height: calcHeight(200),
  },
  authorContainer: {
    width: metrics.content_width - metrics.v_spacing_xl,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  author: {
    marginEnd: metrics.v_spacing_xl,
    marginVertical: metrics.v_spacing_xs,
  },
});
