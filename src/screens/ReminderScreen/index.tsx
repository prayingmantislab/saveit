import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ReminderScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Ohad is in the house, everybody run</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    color: '#202b0b',
  },
});

export default ReminderScreen;
