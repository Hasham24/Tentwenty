import React from 'react';
import {SafeScreen} from '~components';
import useStyle from './styles';
import {Text, View} from 'react-native';

const Dashboard = () => {
  const styles = useStyle();

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.text}>Dashboard</Text>
      </View>
    </SafeScreen>
  );
};

export default Dashboard;
