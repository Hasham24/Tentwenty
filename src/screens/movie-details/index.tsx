import React from 'react';
import isEmpty from 'lodash/isEmpty';
import {
  View,
  Image,
  ActivityIndicator,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getFormattedDate, getImage} from '~utils';
import {ICON_TYPES, ImageSizes} from '~constants';
import {
  Button,
  VectorIcon,
  Genres,
  Separator,
  Header,
  ScreenLoader,
} from '~components';
import {colors} from '~theme';
import useMovieDetail from './useMovieDetail';
import useStyle from './styles';

const Movies = () => {
  const {t} = useTranslation('movie');
  const {
    isLoading,
    data,
    loading,
    setLoading,
    watchTrailerHandler,
    selectTickerHandler,
  } = useMovieDetail();
  const {
    poster_path = '',
    release_date = '',
    genres = [],
    overview = '',
  } = data || {};
  const styles = useStyle();

  // loading state
  if (isLoading && isEmpty(data)) {
    return <ScreenLoader />;
  }
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ScrollView>
        <View>
          {loading && (
            <ActivityIndicator
              style={styles.activityIndicator}
              size="large"
              color={colors.lightBlue}
            />
          )}
          <Image
            source={{uri: getImage(ImageSizes.w1280, poster_path || '')}}
            style={styles.image}
            resizeMode="cover"
            onLoadEnd={() => setLoading(false)}
          />
          <Header
            title={t('watch')}
            containerStyle={styles.header}
            iconColor={colors.white}
          />
          <View style={styles.buttonContainer}>
            <Text style={styles.theaters}>
              {`${t('inTheaters')}${getFormattedDate(release_date || '')}`}
            </Text>
            <Button text={t('getTickets')} onPress={selectTickerHandler} />
            <Button
              text={t('watchTrailer')}
              style={styles.button}
              hasIcon={true}
              icon={
                <VectorIcon
                  name="caretright"
                  iconType={ICON_TYPES.AntDesign}
                  size={20}
                  color={colors.white}
                />
              }
              onPress={watchTrailerHandler}
            />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.heading}>{t('genres')}</Text>
          <Genres genres={genres} />
          <Separator style={styles.line} />
          <Text style={styles.heading}>{t('overview')}</Text>
          <Text style={styles.overView}>{overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Movies;
