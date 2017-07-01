import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  alarm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alarmTime: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    padding: 10,
    margin: 5,
    alignItems: 'center'
  },
  timeNumber: {
    fontSize: 50
  },
  setAlarm: {
    flex: 1,
    alignSelf: 'stretch'
  }
});