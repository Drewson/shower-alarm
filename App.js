import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Alarm from './app/alarm/alarm';
import Clock from './app/clock/clock';
import Camera from './app/clock/camera';

const App = StackNavigator({
  Alarm: { screen: Alarm },
  Clock: { screen: Clock },
  Camera: { screen: Camera },
});

export default App;