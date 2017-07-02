import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  alarm: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  alarmTime: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  meridiem: {
    color: 'white',
    fontSize: 50
  },
  timeNumber: {
    fontSize: 80,
    color: 'white'
  },
  setAlarm: {
    backgroundColor: 'white',
    height: 50,
    padding: 10,
    width: 150,
    borderRadius: 25,
    margin: 20,
  },
  setAlarmText: {
    fontSize: 20,
    textAlign: 'center'
  },
  increment: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 20,
    width: 50,
    padding: 20
  }
});