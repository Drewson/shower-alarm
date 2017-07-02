import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';

import TimeEdit from './timeEdit'
import { styles } from './styles';

class Alarm extends Component {

  constructor(){
    super();
    this.state = {
      hour: 12,
      minute: 0,
      second: 0,
      meridiem: 'am'
    }

    this.increaseHour = this.increaseHour.bind(this)
    this.increaseMinute = this.increaseMinute.bind(this)
    this.decrease = this.decrease.bind(this)
  }

  static navigationOptions = {
    title: 'Set Alarm',
    header: null
  }

  increaseHour(){
    if(this.state.hour >= 12){
      this.setState({ hour: 1 });
      this.amPm();
    } else {
      this.setState({ hour: this.state.hour + 1 });
    }
  }

  increaseMinute(){
    if(this.state.minute >= 59){
      this.setState({ minute: 0 });
      this.amPm();
    } else {
      this.setState({ minute: this.state.minute + 1 });
    }
  }

  decrease(name){
    if(name === 'hour' && this.state.hour > 1){
      this.setState({ hour: this.state.hour - 1 });
    } else if(this.state.minute > 1){
      this.setState({ minute: this.state.minute - 1 });
    } else if(name === 'hour'){
       this.setState({ hour: 12 });
    } else {
      this.setState({ minute: 59 });
    }
  }

  amPm(){
    this.state.meridiem === 'am' ?
    this.setState({ meridiem: 'pm' })
    : this.setState({ meridiem: 'am' })
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.alarm} >
        <View style={styles.alarmTime} >
          <TimeEdit
            time={this.state.hour}
            name='hour' increase={this.increaseHour}
            decrease={this.decrease}
          />
          <Text> : </Text>
          <TimeEdit
            time={this.state.minute}
            name='minute'
            increase={this.increaseMinute}
            decrease={this.decrease}
          />
          <TouchableOpacity onPress={() => this.amPm()} >
            <Text style={styles.meridiem} >{this.state.meridiem}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigate('Clock', {
            alarmTime: {
              minute: this.state.minute,
              hour: this.state.hour,
              second: this.state.second,
              meridiem: this.state.meridiem
            },
            navigation: this.props.navigation
          })}
          style={styles.setAlarm}
        >
          <Text style={styles.setAlarmText}>Set Alarm</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Alarm;