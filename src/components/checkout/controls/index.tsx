import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useStyle from './styles';

interface IProps {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
}
const Controls: React.FC<IProps> = props => {
  const styles = useStyle();
  const {handleZoomIn, handleZoomOut} = props;
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TouchableOpacity onPress={handleZoomOut} style={styles.zoomButton}>
          <Text style={styles.zoomText}>−</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleZoomIn} style={styles.zoomButton}>
          <Text style={styles.zoomText}>＋</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bar} />
    </View>
  );
};
export default React.memo(Controls);
