import {useTheme} from '@react-navigation/native';
import {translate} from '../../../utils/i18n-helper';
import React from 'react';
import {View} from 'react-native';
import {Input} from '../../atoms/Input';
import styles from './styles';

interface Props {
  value: string;
  onSearch: (text: string) => void;
}

export const SearchBar: React.FC<Props> = React.memo(({value, onSearch}) => {
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.card, borderColor: colors.border},
      ]}>
      <Input
        style={{color: colors.text}}
        placeholder={translate('Search')}
        value={value}
        onChange={(text: string) => onSearch(text)}
      />
    </View>
  );
});
