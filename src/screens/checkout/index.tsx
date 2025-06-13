import React from 'react';
import {View, ScrollView} from 'react-native';
import {getFormattedDate} from '~utils';
import {
  SafeScreen,
  Header,
  SeatsGrid,
  CheckoutFooter,
  Controls,
} from '~components';
import useSelectTicket from './useCheckoutTicket';
import useStyle from './styles';

const CheckoutTicket = () => {
  const {movie, date, cinema, scale, handleZoomIn, handleZoomOut} =
    useSelectTicket();
  const {title} = movie;
  const styles = useStyle();
  const gridWidth = (cinema?.seats?.[0]?.length || 0) * 36;
  return (
    <SafeScreen>
      <Header
        title={title}
        textStyle={styles.text}
        descriptionText={`${getFormattedDate(String(date))} | ${
          cinema?.showTime
        } ${cinema?.hall} `}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <ScrollView
              horizontal
              contentContainerStyle={[
                styles.scrollContainer,
                {minWidth: gridWidth},
              ]}
              showsHorizontalScrollIndicator={false}
              bounces={false}>
              <View
                style={{
                  transform: [{scale}],
                }}>
                <SeatsGrid
                  seats={cinema?.seats}
                  showIndex
                  rowStyle={styles.rowStyle}
                  imageStyle={styles.imageStyle}
                />
              </View>
            </ScrollView>
            <Controls
              handleZoomIn={handleZoomIn}
              handleZoomOut={handleZoomOut}
            />
          </View>
          <CheckoutFooter />
        </ScrollView>
      </View>
    </SafeScreen>
  );
};

export default CheckoutTicket;
