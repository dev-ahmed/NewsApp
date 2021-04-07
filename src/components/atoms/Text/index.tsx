import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextStyle, Text as RNText} from 'react-native';

interface Props {
  children: Element;
  style?: TextStyle[];
}

export const Text: React.FC<Props> = React.memo(({children, style}) => {
  const {colors} = useTheme();
  return <RNText style={[style, {color: colors.text}]}>{children}</RNText>;
});
