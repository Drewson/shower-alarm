import Dimensions from 'Dimensions';
import { StyleSheet } from 'react-native';

var { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  clock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  turnOff: {
    fontSize: 32,
    color: 'white'
  },
  time: {
    fontSize: 60,
    fontWeight: '200',
    color: 'white',
    borderWidth: 2,
    padding: 20,
    borderColor: 'white'
  },
  triggerWarning: {
    position: 'absolute',
    flex: 1,
    height: height,
    width: width,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  triggerText: {
    color: 'white',
    position: 'relative',
    textAlign: 'center',
  },
  noShower: {
    marginTop: 30,
    width: 250,
    borderRadius: 3,
    elevation: 2,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.2,
    shadowOffset: {width: 4, height: 4},
    shadowRadius: 5,
  },
  labels: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'black'
  },
  labelsText: {
    fontSize: 20,
    color: 'white'
  },
  takePic: {

  },
  takeText: {
    fontWeight: '200',
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
    borderWidth: 2,
    padding: 20,
    borderColor: 'white'
  }
});