import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import useStyle from './styles';
import {colors, iconSize} from '~theme';
import {ICON_TYPES} from '~constants';
import {VectorIcon, Button} from '~components';

interface IProps {}
const CheckoutFooter: React.FC<IProps> = () => {
  const {t} = useTranslation('checkout');
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.seatInfo}>
          <View>
            <View style={[styles.seat, styles.selected]} />
            <View style={[styles.seatBottom, styles.selected]} />
          </View>
          <Text style={[styles.seatText]}>{t('selected')}</Text>
        </View>
        <View style={styles.seatInfo}>
          <View>
            <View style={[styles.seat, styles.notAvailable]} />
            <View style={[styles.seatBottom, styles.notAvailable]} />
          </View>
          <Text style={[styles.seatText]}>{t('notAvailable')}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.seatInfo}>
          <View>
            <View style={[styles.seat, styles.vip]} />
            <View style={[styles.seatBottom, styles.vip]} />
          </View>
          <Text style={[styles.seatText]}>{`${t('vip')} (150$)`}</Text>
        </View>
        <View style={styles.seatInfo}>
          <View>
            <View style={[styles.seat, styles.regular]} />
            <View style={[styles.seatBottom, styles.regular]} />
          </View>
          <Text style={[styles.seatText]}>{`${t('regular')} (50$)`}</Text>
        </View>
      </View>
      <View style={styles.selectedRow}>
        <Text style={styles.selectedRowText}>
          4 / <Text style={styles.rowCount}>3 row</Text>
        </Text>
        <TouchableOpacity hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <VectorIcon
            iconType={ICON_TYPES.AntDesign}
            name="close"
            size={iconSize.small}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalPrice}>{t('totalPrice')}</Text>
          <Text style={styles.amountText}>$200</Text>
        </View>
        <Button text={t('proceedToPay')} style={styles.button} />
      </View>
    </View>
  );
};
export default React.memo(CheckoutFooter);
