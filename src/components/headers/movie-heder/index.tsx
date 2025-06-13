import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {VectorIcon} from '~components';
import {colors, iconSize} from '~theme';
import {filterMoviesByTitle} from '~store';
import useStyle from './styles';
interface IHeader {
  title: string;
}

const MovieHeader: React.FC<IHeader> = props => {
  const dispatch = useDispatch();
  const styles = useStyle();
  const {t} = useTranslation('movie');
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const {title = ''} = props;

  const searchHandler = useCallback(() => {
    setIsSearch(!isSearch);
    setQuery('');
  }, [isSearch]);
  const search = useCallback(
    (val = '') => {
      dispatch(filterMoviesByTitle(val));
      setQuery(val);
    },
    [dispatch],
  );
  if (!isSearch) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.iconButton}
          onPress={searchHandler}>
          <VectorIcon name="search1" size={iconSize.regular} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.iconButton}>
          <VectorIcon name="search1" size={iconSize.small} />
        </View>
        <TextInput
          placeholder={t('placeholder')}
          placeholderTextColor={colors.cloudBurst30}
          value={query}
          onChangeText={search}
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.iconButton}
          onPress={searchHandler}>
          <VectorIcon name="close" size={iconSize.regular} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MovieHeader;
