import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {VectorIcon} from '~components';
import {iconSize} from '~theme';
import useStyle from './styles';

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = props => {
  const {t} = useTranslation('movie');
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const styles = useStyle();
  const {title = ''} = props;
  const searchHandler = () => {
    setIsSearch(!isSearch);
    setQuery('');
  };
  return (
    <View>
      {!isSearch ? (
        <View style={styles.container}>
          <Text style={styles.text}>{title}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.iconButton}
            onPress={searchHandler}>
            <VectorIcon name="search1" size={iconSize.regular} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.searchContainer}>
          <View style={styles.iconButton}>
            <VectorIcon name="search1" size={iconSize.regular} />
          </View>
          <TextInput
            placeholder={t('placeholder')}
            value={query}
            onChangeText={setQuery}
            style={styles.textInput}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.iconButton}
            onPress={searchHandler}>
            <VectorIcon name="close" size={iconSize.regular} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default Header;
