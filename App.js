import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Router from './app/router'

import Alarm from './app/alarm/alarm';
import Clock from './app/clock/clock';

const App = StackNavigator({
  Alarm: { screen: Alarm },
  Clock: { screen: Clock }
});

export default App;