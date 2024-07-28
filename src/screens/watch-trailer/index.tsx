import React from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeScreen, Header} from '~components';
import useStyle from './styles';

const ShowTrailer = () => {
  const {t} = useTranslation('movie');
  const styles = useStyle();
  return (
    <SafeScreen>
      <Header title={t('watch')} />
      <View style={styles.container}>
        <Text style={styles.text}>
          Did'nt got the trailer url from the given Api
        </Text>
      </View>
    </SafeScreen>
  );
};

export default ShowTrailer;
