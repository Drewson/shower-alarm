import React from 'react';
import { Text, View, Button } from 'react-native';

import { styles } from './styles'

const TimeEdit = (props) => {
  return (
    <View style={styles.time} >
      <Button title='+' onPress={() => props.increase(props.name)} />
        {
          (props.name === 'minute' && props.time < 10)
          ?
          <Text style={styles.timeNumber} >0{props.time}</Text>
          :
          <Text style={styles.timeNumber} >{props.time}</Text>
        }
      <Button title='-' onPress={() => props.decrease(props.name)} />
    </View>
  )
}

export default TimeEdit;