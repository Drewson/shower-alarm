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
    color: 'white',
    fontWeight: '200'
  },
  setAlarm: {

  },
  setAlarmText: {
    fontSize: 32,
    fontWeight: '200',
    color: 'white',
    padding: 10,
    borderWidth: 2,
    borderColor: 'white',
    textAlign: 'center'
  },
  increment: {
    borderRadius: 10,
    padding: 30,
    paddingBottom: 5,
  },
  decrement: {
    borderRadius: 10,
    padding: 30,
    paddingTop: 5,
  }
});