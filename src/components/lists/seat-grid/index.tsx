import React, {useCallback} from 'react';
import {
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
  Text,
} from 'react-native';
import useStyle from './styles';
import {AppImages} from '~assets';

interface IProps {
  seats: ISeats[][];
  selectedSeats?: string[];
  disabled?: boolean;
  seatStyle?: StyleProp<ViewStyle>;
  onSelectSeat?: (seatId: string) => void;
}

const SeatsGrid: React.FC<IProps> = props => {
  const {
    seats,
    selectedSeats = [],
    disabled = false,
    seatStyle = {},
    onSelectSeat = () => undefined,
  } = props;
  const styles = useStyle();
  const getSeatStyle = useCallback(
    (type: SeatType, isSelected: boolean) => {
      if (isSelected) {
        return styles.selected;
      }

      switch (type) {
        case 'vip':
          return styles.vip;
        case 'regular':
          return styles.regular;
        case 'not-available':
          return styles.notAvailable;
        default:
          return {};
      }
    },
    [styles],
  );
  return (
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        <Image
          source={AppImages.curve}
          resizeMode="contain"
          style={styles.curvedLineImage}
        />
        <Text style={styles.label}>SCREEN</Text>
      </View>
      {seats.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map(seat => {
            const isSelected = selectedSeats.includes(seat.id);
            const seatStyleType = getSeatStyle(seat.type, isSelected);

            return (
              <View key={seat.id}>
                <TouchableOpacity
                  disabled={seat.type === 'not-available' || disabled}
                  onPress={() => onSelectSeat(seat.id)}
                  style={[styles.seat, seatStyleType, seatStyle]}
                />
                <View style={[styles.seatBottom, seatStyleType]} />
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default SeatsGrid;
